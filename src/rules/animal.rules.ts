import { AnimalStatus } from "@/types/enums";
import { Animal, Rule } from "@/types/types";
import { helpers, maxLength, minLength, required } from "@vuelidate/validators";
import { taxonomyRules } from "./taxonomy.rules";
import { dietRules } from "./diet.rules";
import { habitatRules } from "./habitat.rules";


export const animalRules: Partial<Record<keyof Animal, Rule | Partial<Record<keyof Animal[keyof Animal], Rule>>>> = {
    name: {
        required: helpers.withMessage("El nombre es requerido", required),
        minLength: helpers.withMessage("El nombre debe tener al menos 3 caracteres", minLength(3)),
        maxLength: helpers.withMessage("El nombre no puede tener más de 100 caracteres", maxLength(100)),
    },
    scientific_name: {
        maxLength: helpers.withMessage("El nombre científico no puede tener más de 100 caracteres", maxLength(100)),
    },
    description: {
        required: helpers.withMessage("La descripción es requerida", required),
        minLength: helpers.withMessage("La descripción debe tener al menos 3 caracteres", minLength(3)),
        maxLength: helpers.withMessage("La descripción no puede tener más de 1500 caracteres", (value: string= '') => {
            const innerText = value.replace(/<[^>]*>/g, '');
            return innerText.length <= 1500
        }),

    },
    photos: {
        maxLength: helpers.withMessage("Puede adjutar hsata 10 fotos", maxLength(150)),
    },
    image: {
        required: helpers.withMessage("Se require una imagen", required),
        maxLength: helpers.withMessage("La imagen no puede tener más de 150 caracteres", maxLength(150)),
    },
    categoryId: {
        required: helpers.withMessage("La categoría es requerida", required)
    },
    status: {
        required: helpers.withMessage("Debe indicar el estado", required),
        isIn: helpers.withMessage("Estado no válido", (value: string) => {
            return Object.values(AnimalStatus).includes(value as AnimalStatus)
        })
    },
    status_source: {
        maxLength: helpers.withMessage("La fuente del estado no puede tener más de 250 caracteres", maxLength(250)),
    },
    status_date: {
    },  
    status_reason: {
        maxLength: helpers.withMessage("La razón del estado no puede tener más de 250 caracteres", maxLength(250)),
    },
    taxonomy: {
        $each: {
            ...taxonomyRules
        }
    },
    diet: {
        $each: {
            ...dietRules
        }
    },
    habitat: {
        $each: {
            ...habitatRules
        }
    }
}