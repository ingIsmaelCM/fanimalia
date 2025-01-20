import { EAxiosVerb } from "@/types/enums";
import Repository from "./repository";
import { IAuth, IRegister } from "@/types/types";


export default class AuthRepository extends Repository<any> {
    endpoint: string = '/auth';

    async login(data: IAuth): Promise<any> {
        return this.safeRun(
            async () =>
                await this.custom(this.endpoint + "/login", EAxiosVerb.Post, data)
        );
    }


    async register(data: IRegister): Promise<any> {
        return this.safeRun(
            async () =>
                await this.custom(this.endpoint + "/register", EAxiosVerb.Post, data)
        );
    }
}