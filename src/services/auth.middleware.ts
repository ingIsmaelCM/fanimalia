import { useUserStore } from "@/stores";

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

  userPermissions(): Array<String> {
    return useUserStore().getUser?.permissions?.map((p) => p.name) || [];
  }

  hasPermission(permission: string): boolean {
    return this.userPermissions().some((perm) => perm === permission);
  }

  public hasAnyPermission(permissions: string[]): boolean {
    return permissions.some((p) => this.hasPermission(p));
  }

  hasAllPermissions(permissions: string[]): boolean {
    return permissions.every((p) => this.hasPermission(p));
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
}


export default new AuthMiddleware();

const mid=new AuthMiddleware();
export const can=(permission:string)=>mid.hasPermission(permission);
export const canAny=(permissions:string[])=>mid.hasAnyPermission(permissions);
export const canAll=(permissions:string[])=>mid.hasAllPermissions(permissions);
export const isAuth=()=>mid.isAuth();