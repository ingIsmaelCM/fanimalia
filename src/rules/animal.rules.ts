import { Animal, Rule } from "@/types/types";
import { helpers, maxLength, minLength, required } from "@vuelidate/validators";


export const animalRules: Partial<Record<keyof Animal, Rule>> = {
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
        maxLength: helpers.withMessage("La descripción no puede tener más de 100 caracteres", (value: string) => {
            const innerText = value.replace(/<[^>]*>/g, '');
            return innerText.length <= 1500
        }),

    },
    photos: {

    },
    image :{
        maxLength: helpers.withMessage("La imagen no puede tener más de 150 caracteres", maxLength(150)),
    },
    categoryId: {
        required: helpers.withMessage("La categoría es requerida", required)
    },
}