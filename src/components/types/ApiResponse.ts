import products from './products'

export interface ApiResponse {
    products: products[];
    total: number;
    skip: number;
    limit: number;
}