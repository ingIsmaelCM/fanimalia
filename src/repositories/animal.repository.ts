import { Animal } from "@/types/types";
import Repository from "./repository";

export default class AnimalRepository extends Repository<Animal> {
    endpoint: string = "/animals";
}