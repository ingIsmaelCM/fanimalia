import { IAuth, IRegister, Rule } from "@/types/types";
import { email, helpers, required } from "@vuelidate/validators";

export const authRules: Record<keyof IAuth, Rule> = {
    username: {
        required: helpers.withMessage("Ingrese un nombre de usuario", required),
    },
    password: {
        required: helpers.withMessage("Ingrese una contraseña", required),
    },
    rememberMe: {
    }
}

export const registerRules: Record<keyof IRegister, Rule> = {
    username: {
        required: helpers.withMessage("Ingrese un nombre de usuario", required),
    },
    password: {
        required: helpers.withMessage("Ingrese una contraseña", required),
    },
    email: {
        required: helpers.withMessage("Ingrese un email", required),
        email: helpers.withMessage("Ingrese un email válido", email),
    },
    role: {
        required: helpers.withMessage("Seleccione un rol", required),
        isIn: helpers.withMessage("Seleccione un rol válido", (value: string) => ['Admin', 'Editor', 'Viewer'].includes(value)),
    }
}