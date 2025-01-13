import CategoryRepository from "@/repositories/category.repository"
import { Category } from "@/types/types"
import { ref, Ref } from "vue"
import QueryService from "./query.service"


export default function useCategory(){

    const categoryRepo = new CategoryRepository()
    const query = new QueryService()

    const categories: Ref<Category[]> = ref([])
    const category: Ref<Category> = ref({} as Category)


    const getCategories = async () => {
        const response = await categoryRepo.get(query.parsed.value)
        categories.value = response.data.rows
    }


    return {
        getCategories,
        categories,
        category,
        query

    }
}