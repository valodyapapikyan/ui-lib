import { IHttpClient, IHttpClientRequestParameters } from './types';
export declare class HttpClient implements IHttpClient {
    get<T>(params: IHttpClientRequestParameters): Promise<T>;
    post<T>(parameters: IHttpClientRequestParameters): Promise<T>;
}
export declare const httpClient: HttpClient;
