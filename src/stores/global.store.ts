import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
    state: () => ({
        darkMode: false,
        loading: false,
        loadingText: "",
        progress: false,
       
    }),
    actions: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
        },
        setLoading(loading: boolean, text: string = "") {
            this.loadingText = text
            this.loading = loading;
            if(!loading) {
                this.loadingText = ""
            }

        },
        setProgress(progress: boolean) {
            this.progress = progress;
        },

        getImage(url: string="") {
            if(!url) return ""
            if(url.startsWith("http")) return url;
            if(import.meta.env.DEV){
                return import.meta.env.VITE_DEV_FILE_BASE_URL + url
            }
            return import.meta.env.VITE_FILE_BASE_URL + url
        },
        
    },
    getters: {
        getDarkMode: (state) => state.darkMode,
        getLoadingText: (state) => state.loadingText,
        getLoading: (state) => state.loading,
        getProgress: (state) => state.progress,
    },
});