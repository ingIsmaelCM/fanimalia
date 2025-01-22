import { useUserStore } from "@/stores";
import { UserRole } from "@/types/enums";

 class AuthMiddleware {
  constructor() {
    const prototype = Object.getPrototypeOf(this);
    const methodNames = Object.getOwnPropertyNames(prototype);

    for (const methodName of methodNames) {
      const method = (this as any)[methodName];
      if (methodName !== "constructor" && typeof method === "function") {
        (this as any)[methodName] = method.bind(this) as typeof method;
      }
    }
  }


  isAuth() {
    try {
      const token = localStorage.getItem(
        import.meta.env.VITE_LOCAL_TOKEN_NAME
      );
      return !!token;
    } catch (error) {
      return false;
    }
  }

  isAdmin() {
     return useUserStore().getUser?.role === UserRole.admin
  }

  isViewer() {
    return useUserStore().getUser?.role === UserRole.viewer
  }

  isEditor() {
    return useUserStore().getUser?.role === UserRole.editor
  }

  hasAnyRole(roles: UserRole[]) {
    return roles.includes(useUserStore().getUser?.role)
  }

  hasRole(role: UserRole) {
    return useUserStore().getUser?.role === role
  }

  hastAllRoles(roles: UserRole[]) {
    return roles.every((role) => useUserStore().getUser?.role === role)
  }
}


export default new AuthMiddleware();

const mid=new AuthMiddleware();
export const isAuth=()=>mid.isAuth();
export const isAdmin=()=>mid.isAdmin();
export const isViewer=()=>mid.isViewer();
export const isEditor=()=>mid.isEditor();
export const hasAnyRole=(roles:UserRole[])=>mid.hasAnyRole(roles);
export const hasRole=(role:UserRole)=>mid.hasRole(role);
export const hastAllRoles=(roles:UserRole[])=>mid.hastAllRoles(roles);