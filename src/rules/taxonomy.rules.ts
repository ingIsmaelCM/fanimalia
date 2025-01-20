import { Rule, Taxonomy } from "@/types/types";
import { helpers, maxLength } from "@vuelidate/validators";


export const taxonomyRules: Partial<Record<keyof Taxonomy, Rule >> = {
    phylum: {
        maxLength: helpers.withMessage("50 caracteres máximo", maxLength(50)),
    },
    class:{
        maxLength: helpers.withMessage("50 caracteres máximo", maxLength(50)),
    },
    order:{
        maxLength: helpers.withMessage("50 caracteres máximo", maxLength(50)),
    },
    family:{
        maxLength: helpers.withMessage("50 caracteres máximo", maxLength(50)),
    },
    genus:{
        maxLength: helpers.withMessage("50 caracteres máximo", maxLength(50)),
    },
    specie:{
        maxLength: helpers.withMessage("50 caracteres máximo", maxLength(50)),
    },
}