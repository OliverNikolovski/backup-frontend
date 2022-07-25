import { Blog } from "./blog";

export interface Page {
    content: Blog[];
    last: Boolean;
    totalElements: Number;
    totalPages: number;
    size: Number;
    first: Boolean;
    numberOfElements: Number;
    empty: Boolean;
}