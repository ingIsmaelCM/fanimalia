import { EAxiosVerb } from "@/types/enums";
import api from "@/services/Axios";
import { AxiosResponse } from "axios";
import { APIResponse } from "@/types/types";

/**
 * Abstract base class for repositories, providing a basic structure for API interactions.
 *
 * @abstract
 * @template I
 */
export default abstract class Repository<I extends {}> {
  abstract endpoint: string;
  protected Api = api;

  protected async safeRun(method: () => Promise<AxiosResponse<I|AxiosResponse<APIResponse<I>>>>) 
  : Promise<AxiosResponse<I>|AxiosResponse<APIResponse<I>>> {
    return new Promise<AxiosResponse<I>>((resolve, reject) => {
        method().then((response) => {
            resolve(response as AxiosResponse);
        }).catch((error) => {
          reject(error);
        });
    })
  }

  /**
   * Sends a custom request to the API.
   *
   * @param {string} endpoint - The endpoint URL for the request.
   * @param {EAxiosVerb} verb - The HTTP verb to use for the request.
   * @param {object} [data] - Optional data to send with the request.
   * @return {Promise<any>} The response from the API.
   */
  async custom(
    endpoint: string,
    verb: EAxiosVerb,
    data?: object
  ): Promise<any> {
    return this.safeRun(async () => await this.Api[verb](endpoint, data));
  }
  async sendFile(endpoint: string, file: File): Promise<any> {
    return this.safeRun(async () => {
      let data = new FormData();
      data.append("file", file);
      return await this.Api.post(endpoint, data, {
        headers: {
          "Content-Type": `multipart/form-data`,
        },
      });
    });
  }

  async sendFiles(endpoint: string, files: File[], dataOBject?: object): Promise<any> {
    return this.safeRun(async () => {
      let data = new FormData();
      for (let i = 0; i < files.length; i++) {
        data.append("files", files[i])
      };
      Object.keys(dataOBject || {}).forEach((key) => {
        data.append(key, dataOBject?.[key]);
      })
      return await this.Api.post(endpoint, data, {
        headers: {
          "Content-Type": `multipart/form-data`,
        },
      });
    });
  }

  async save(data: I): Promise<any> {
    return this.safeRun(async () => await this.Api.post(this.endpoint, data));
  }

  async update(key: string, data: I): Promise<AxiosResponse<APIResponse<I>>> {
    return this.safeRun(
      async () => await this.Api.put(this.endpoint + "/" + key, data)
    ) as Promise<AxiosResponse<APIResponse<I>>>;
  }

  async patch(key: string, data: object): Promise<any> {
    return this.safeRun(() => this.Api.patch(this.endpoint + "/" + key, data));
  }

  async get(params: string = ""): Promise<AxiosResponse<APIResponse<I>>> {
    return this.safeRun(() => this.Api.get(this.endpoint + params)) as Promise<AxiosResponse<APIResponse<I>>>;
  }

  async pluck(params: string = "", fields: string = "name"): Promise<any> {
    return this.safeRun(() => this.Api.get(`${this.endpoint}/pluck/${fields}` + params));
  }

  async find(key: string, params: string = ""): Promise<any> {
    return this.safeRun(() => this.Api.get(this.endpoint + "/" + key + params));
  }

  async delete(key: number | string): Promise<any> {
    return this.safeRun(() => this.Api.delete(this.endpoint + "/" + key));
  }

  async restore(key: number | string): Promise<any> {
    return this.safeRun(() => this.Api.patch(this.endpoint + "/" + key));
  }
}