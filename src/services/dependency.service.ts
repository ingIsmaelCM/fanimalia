import AppRepository from "@/repositories/app.repository";
import { APIResponse, Diet, Habitat, Selectable, Taxonomy } from "@/types/types";
import { AxiosResponse } from "axios";
import { ref, Ref } from "vue";
import { EAxiosVerb } from "@/types/enums";

export default function useDependency() {
    const appRepo = new AppRepository();
    type QueryResponse<T> = {
        [key in 'taxonomy' | 'diet' | 'habitat' | 'reproduction']: T;
    } & {
        _id: string;
    };

    const taxonomies: Ref<Selectable<Taxonomy>[]> = ref([]);
    const getTaxonomies = async (): Promise<QueryResponse<Taxonomy>[]> => {
        return await appRepo.custom('taxonomies', EAxiosVerb.Get).then((res: AxiosResponse<APIResponse<QueryResponse<Taxonomy>>>) => {
            taxonomies.value = res.data.rows.filter((row) => row.taxonomy?.specie).map((row: { _id: string, taxonomy: Taxonomy }) =>
                ({ value: row.taxonomy, label: row.taxonomy.specie }));
            return res.data.rows
        }) as QueryResponse<Taxonomy>[];
    }
    const onUpdateTaxonomy = (taxonomy: Taxonomy) => {
        if (Object.keys(taxonomy).length <= 1) {
            return
        }
        if (!taxonomies.value.find((row) => row.value._id === taxonomy._id)) {
            taxonomies.value.push({ value: taxonomy, label: taxonomy.specie || 'Nuevo Taxón' });
        } else {
            taxonomies.value = taxonomies.value.map((row) => {
                if (row.value._id === taxonomy._id) {
                    row.value = taxonomy;
                    row.label = taxonomy.specie || 'Nuevo Taxón';
                }
                return row;
            })
        }
    }

    const habitats: Ref<Selectable<Habitat>[]> = ref([]);
    const getHabitats = async (): Promise<QueryResponse<Habitat>[]> => {
        return await appRepo.custom('habitats', EAxiosVerb.Get).then((res: AxiosResponse<APIResponse<QueryResponse<Habitat>>>) => {
            habitats.value = res.data.rows.filter((row) => row.habitat?.name).map((row: { _id: string, habitat: Habitat }) =>
                ({ value: row.habitat, label: row.habitat.name }));
            return res.data.rows
        }) as QueryResponse<Habitat>[];
    }
    const onUpdateHabitat = (habitat: Habitat) => {
        console.log(habitat);
        if (Object.keys(habitat).length <= 1) {
            return
        }
        if (!habitats.value.find((row) => row.value._id === habitat._id)) {
            habitats.value.push({ value: habitat, label: habitat.name || 'Nuevo Habitat' });
        } else {
            habitats.value = habitats.value.map((row) => {
                if (row.value._id === habitat._id) {
                    row.value = habitat;
                    row.label = habitat.name || 'Nuevo Habitat';
                }
                return row;
            })
        }
    }

    const diets: Ref<Selectable<Diet>[]> = ref([]);
    const getDiets = async (): Promise<QueryResponse<Diet>[]> => {
        return await appRepo.custom('diets', EAxiosVerb.Get).then((res: AxiosResponse<APIResponse<QueryResponse<Diet>>>) => {
            diets.value = res.data.rows.filter((row) => row.diet?.type).map((row: { _id: string, diet: Diet }) =>
                ({ value: row.diet, label: row.diet.type }));
            return res.data.rows
        }) as QueryResponse<Diet>[];
    }
    const onUpdateDiet = (diet: Diet) => {
        if (Object.keys(diet).length <= 1) {
            return
        }
        if (!diets.value.find((row) => row.value._id === diet._id)) {
            diets.value.push({ value: diet, label: diet.type || 'Nueva Diet' });
        } else {
            diets.value = diets.value.map((row) => {
                if (row.value._id === diet._id) {
                    row.value = diet;
                    row.label = diet.type || 'Nueva Diet';
                }
                return row;
            })
        }
    }

    return {
        taxonomies,
        onUpdateTaxonomy,
        getTaxonomies,
        habitats,
        onUpdateHabitat,
        getHabitats,
        diets,
        onUpdateDiet,
        getDiets
    }
}