import { Blog } from "./blog";

export interface Page {
    content: Blog[];
    last: boolean;
    totalElements: number;
    totalPages: number;
    size: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}