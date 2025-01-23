import { useGlobalStore, useUserStore } from "@/stores";
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";
import utils from "@/types/helpers/utils";
import AuthRepository from "@/repositories/auth.repository";
import { IAuth, IRegister } from "@/types/types";
import { EAxiosVerb } from "@/types/enums";



export default function useAuth() {
  const authRepo = new AuthRepository();
  const router = useRouter();
  const toast = useToast();
  const login = async (auth: IAuth) => {
    useGlobalStore().setLoading(true, 'Iniciando sesión...');
    if (useUserStore().getToken) {
      router.push({ name: "home" });
      return;
    }
    await authRepo
      .login(auth)
      .then((res) => {
        utils.toastSucess(toast, "Sesión iniciada");
        saveRememberMe(auth);
        useUserStore().setUser(res.data.user);
        useUserStore().setToken(res.data.token);
        return res.data;
      })
      .catch((error: any) => {
        utils.toastError(toast, error?.data?.message);
        throw error;
      }).finally(() => useGlobalStore().setLoading(false));
  }

  const register = async (auth: IRegister) => {
    useGlobalStore().setLoading(true, 'Registrando...');
    await authRepo
      .register(auth)
      .then((res) => {
        utils.toastSucess(toast, "Registro exitoso");
        useUserStore().setUser(res.data.user);
        useUserStore().setToken(res.data.token);
        return res.data;
      })
      .catch((error: any) => {
        utils.toastError(toast, error?.data?.message);
        throw error;
      }).finally(() => useGlobalStore().setLoading(false));
  }

  const saveRememberMe = (auth: IAuth) => {
    if (auth.rememberMe) {
      localStorage.setItem(`${import.meta.env.VITE_LOCAL_PREFIX}Remember`, JSON.stringify(auth));
    } else {
      localStorage.removeItem(`${import.meta.env.VITE_LOCAL_PREFIX}Remember`);
    }
  }

  const logout = () => {
    authRepo.logout().then(()=>{
      localStorage.removeItem(`${import.meta.env.VITE_LOCAL_PREFIX}Remember`);
      useUserStore().removeUser();
    })
  }


  return {
    login,
    logout,
    register
  }
}
