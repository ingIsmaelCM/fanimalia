import { HabitatClimate, HabitatType } from "@/types/enums";
import { Habitat, Rule } from "@/types/types";
import { helpers, maxLength, required } from "@vuelidate/validators";

export const habitatRules: Record<keyof Habitat, Rule> = {
    _id: {
    },
    name: {
        required: helpers.withMessage("Valor requerido", required),
        maxLength: helpers.withMessage("Máx. 100 caracteres", maxLength(100)),
    },
    description: {
        maxLength: helpers.withMessage("Máx.  1500 caracteres", (value: string='') => {
            const innerText = value?.replace(/<[^>]*>/g, '');
            return !value || innerText.length <= 1500
        }),
    },
    location: {
        maxLength: helpers.withMessage("Máx. 100 caracteres", maxLength(100)),
    },
    climate: {
        isIn: helpers.withMessage("Valor inválido", (value: string) => {
            return !value || Object.values(HabitatClimate).includes(value as HabitatClimate)
        })
    },
    type: {
        isIn: helpers.withMessage("Valor inválido", (value: string) => {
            return !value || Object.values(HabitatType).includes(value as HabitatType)
        })
    },
    elevation_range: {
        isIn: helpers.withMessage("Rango inválido", (value: string[]) => {
            const isArray = Array.isArray(value);
            const hasTwoValues = value.length === 2;
            const isNumber = value.every((item) => typeof item === 'number');
            const firstIsLessThanSecond = value[0] <= value[1];
            return isArray && hasTwoValues && isNumber && firstIsLessThanSecond;
        }),

    },
    image: {
        maxLength: helpers.withMessage("La imagen no puede tener más de 150 caracteres", maxLength(150)),
    },


}