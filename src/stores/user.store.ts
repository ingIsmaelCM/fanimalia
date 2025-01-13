import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: localStorage[import.meta.env.VITE_LOCAL_USER_NAME]
        ? JSON.parse(localStorage[import.meta.env.VITE_LOCAL_USER_NAME])
        : null,
      token: localStorage[import.meta.env.VITE_LOCAL_TOKEN_NAME] || null,
    };
  },
  actions: {
    setUser(user: any) {
      this.user = user;
      localStorage[import.meta.env.VITE_LOCAL_USER_NAME] =
        JSON.stringify(user);
    },
    setToken(token: any) {
      this.token = token;
      localStorage[import.meta.env.VITE_LOCAL_TOKEN_NAME] = token;
    },

    removeUser() {
      this.user = null;
      this.token = null;
      localStorage.removeItem(import.meta.env.VITE_LOCAL_USER_NAME);
      localStorage.removeItem(import.meta.env.VITE_LOCAL_TOKEN_NAME);
    },
  },
  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token,
  },
});