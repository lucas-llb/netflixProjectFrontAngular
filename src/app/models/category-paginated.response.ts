import { CategoryResponse } from "./cateogry.response";

export interface CategoriesPaginatedResponse {
    perpage: number,
    total: number,
    page: number,
    categories: CategoryResponse[]
}
