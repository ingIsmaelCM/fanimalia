import Repository from "./repository";


export default class AppRepository extends Repository<any>{
    endpoint: string = "/app";
}