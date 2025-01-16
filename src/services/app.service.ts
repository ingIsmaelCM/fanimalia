import { useGlobalStore } from "@/stores";
import { useToast } from "primevue/usetoast";
import { ref } from "vue";

export default function useApp() {
    const toast = useToast();
    const baseUrl = import.meta.env.DEV
        ? import.meta.env.VITE_DEV_API_PUBLIC_URL
        : import.meta.env.VITE_API_PUBLIC_URL;

    const getTemplate = async (name: string) => {
        try {
            useGlobalStore().setLoading(true);
            const a = document.createElement('a');
            a.href = `${baseUrl}/templates/${name}`;
            a.style.display = 'none';
            a.download = name;
            a.target = '_blank';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setTimeout(() => {
                useGlobalStore().setLoading(false);
            }, 1000);
        } catch (error) {
            toast.add({ severity: 'error', summary: 'Error', detail: 'Error al descargar plantilla', life: 3000 });
            useGlobalStore().setLoading(false);
        }
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
        getTemplate
    }
}