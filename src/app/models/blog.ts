export interface Blog {
    title: string;
    content: string;
    dateCreated: Date;
    estimatedReadTime: number;
    numberOfLikes: number;
    username: string;
    tags: string[]
}