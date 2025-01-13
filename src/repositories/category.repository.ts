import { Category } from "@/types/types";
import Repository from "./repository";

export default class CategoryRepository extends Repository<Category>{ 
  endpoint = "/categories"
}