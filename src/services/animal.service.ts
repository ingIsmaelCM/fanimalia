import AnimalRepository from "@/repositories/animal.repository"
import { Animal } from "@/types/types";
import { ref, Ref } from "vue";
import QueryService from "./query.service";
import utils from "@/types/helpers/utils";
import { useToast } from "primevue/usetoast";
import { useGlobalStore } from "@/stores";

export default function useAnimal() {
    const animalRepo = new AnimalRepository();
    const query = new QueryService();

    const animals: Ref<Animal[]> = ref([]);
    const animal: Ref<Animal> = ref({} as Animal);
    const newAnimal: Ref<Animal> = ref({} as Animal);

    const toast = useToast();

    const getAnimals = async () => {

        return await animalRepo.get(query.parsed.value).then((res) => {
            if (query.parsed.value.includes('sortBy=random')) {
                res.data.rows.sort(() => Math.random() - 0.5);
            }
            animals.value = res.data.rows;
            return res.data.rows;
        }).catch((err) => {
            utils.toastError(toast, 'Error al obtener los animales');
            throw err;
        })
    }

    const saveAnimal = async () => {
        useGlobalStore().setLoading(true);
        return await animalRepo.save(newAnimal.value).then((res) => {
            animal.value = res.data.row;
            utils.toastSucess(toast, `Datos de ${newAnimal.value.name} guardados exitosamente`);
            return res;
        }).catch((err) => {
            utils.toastError(toast, 'Error al registrar el animal');
            console.log(err);
            return err;
        }).finally(() => {
            useGlobalStore().setLoading(false);
        })
    }

    const findAnimal = async (id: string) => {
        query.include('category');
        return await animalRepo.find(id, query.parsed.value).then((res) => {
            animal.value = res.data;
            return res.data;
        }).catch((err) => {
            utils.toastError(toast, 'Error al obtener el animal');
            console.log(err);
            return err;
        })
    }

    return {
        animals,
        animal,
        newAnimal,
        query,
        getAnimals,
        saveAnimal,
        findAnimal
    }
}