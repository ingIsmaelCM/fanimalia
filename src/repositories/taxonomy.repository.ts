import { Taxonomy } from "@/types/types";
import Repository from "./repository";

export default class TaxonomyRepository extends Repository<Taxonomy>{
    endpoint: string = '/taxonomies';
}