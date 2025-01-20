import AppRepository from "@/repositories/app.repository";
import { useGlobalStore } from "@/stores";
import utils from "@/types/helpers/utils";
import { useToast } from "primevue/usetoast";
import { ref } from "vue";

export default function useApp() {
    const toast = useToast();
    const appRepo = new AppRepository();


    const uploadSingleFile = async (file: File) => {
        useGlobalStore().setLoading(true);
        return new Promise((resolve, reject) => {
            appRepo.sendFile("/files/upload", file).then((res) => {
                if (res.status === 201) {
                        resolve(res.data);
                        utils.toastSucess(toast, 'Archivo subido correctamente');
                } else {
                    utils.toastError(toast, 'Error al subir el archivo');
                    reject(res);
                }
            }).catch((error) => {
                utils.toastError(toast, 'Error al subir el archivo');
                reject(error);
            }).finally(() => {
                useGlobalStore().setLoading(false);
            })

        })

    }


    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'align': [] }],
        ['blockquote', 'code-block'],
        ['clean']
    ];

    const modules = ref({
        toolbar: toolbarOptions
    })
    return {
        modules,
        uploadSingleFile
    }
}