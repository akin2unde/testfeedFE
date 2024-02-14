export interface PagedResult<T> {
    PageSize: number;
    Skip: number;
    Total: number;
    Result: T[];
    LastItem: string;
}