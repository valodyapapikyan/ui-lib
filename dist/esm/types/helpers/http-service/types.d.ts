export interface IHttpClientRequestParameters {
    endpoint: string;
    payload: unknown;
}
export interface IHttpClient {
    get<T>(parameters: IHttpClientRequestParameters): Promise<T>;
    post<T>(parameters: IHttpClientRequestParameters): Promise<T>;
}
