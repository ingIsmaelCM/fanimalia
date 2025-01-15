import AnimalRepository from "@/repositories/animal.repository"
import { Animal } from "@/types/types";
import { ref, Ref } from "vue";
import QueryService from "./query.service";

export default function useAnimal() {
    const animalRepo = new AnimalRepository();
    const query = new QueryService();

    const animals: Ref<Animal[]> = ref([]);
    const animal: Ref<Animal> = ref({} as Animal);
    const newAnimal: Ref<Animal> = ref({} as Animal);


    const getAnimals = async () => {
        return await animalRepo.get(query.parsed.value).then((res) => {
            if (query.parsed.value.includes('sortBy=random')) {
                res.data.rows.sort(() => Math.random() - 0.5);
            }
            animals.value = res.data.rows;
            return res.data.rows;
        })
    }

    return {
        animals,
        animal,
        newAnimal,
        query,
        getAnimals
    }
}