import { DietType } from "@/types/enums";
import { Diet, Rule } from "@/types/types";
import { helpers, maxLength, required } from "@vuelidate/validators";

export const dietRules: Partial<Record<keyof Diet, Rule>> = {
    type: {
        isIn: helpers.withMessage("Tipo de dieta no válido", (value: string) => {
            return Object.values(DietType).includes(value as DietType)
        }),
        required: helpers.withMessage("Tipo de dieta es requerido", required),
    },
    food_items: {
        maxLength: helpers.withMessage("Puede adjuntar hasta 10 alimentos", maxLength(10)),
        isIn: helpers.withMessage("Hay elementos no válidos en en la lista", (value: string[]) => {
            return value.every((item) => typeof item === 'string' && item.match(/^[a-zA-Z0-9\s]+$/))
        })
    },
    feeding_behavior: {
        maxLength: helpers.withMessage("El valor no puede tener más de 200 caracteres", maxLength(200)),
    }
}