import TaxonomyRepository from "@/repositories/taxonomy.repository";
import QueryService from "./query.service";
import { Taxonomy } from "@/types/types";
import { ref, Ref } from "vue";

export default function useTaxonomy() {
    const query = new QueryService();
    const taxonomyRepo = new TaxonomyRepository();

    const taxonomies: Ref<Taxonomy[]> = ref([]);
    const taxonomy: Ref<Taxonomy> = ref({} as Taxonomy);

    type TaxonomyResponse = {
        _id: string;
        taxonomy: Taxonomy;
    }
    const getTaxonomies = async (): Promise<TaxonomyResponse[]> => {
        return await taxonomyRepo.get(query.parsed.value).then((res) => {
            taxonomies.value = res.data.rows;
            return res.data.rows;
        }) as TaxonomyResponse[];
    }

    return {
        taxonomies,
        taxonomy,
        query,
        getTaxonomies
    }
}