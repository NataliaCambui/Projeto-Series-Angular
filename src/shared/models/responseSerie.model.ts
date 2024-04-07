export interface ResponseSerie<T>{
    content: any [];
    IsSuccess: boolean;
    HasErrors: boolean;
    ErrorMessages: String[];
}