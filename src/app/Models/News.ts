export class News {
    id: any;
    // author: string;
    title: string;
    description: string;
    // url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;

    constructor(id: any, title: string, description: string, urlToImage: string, publishedAt: string, content: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.urlToImage = urlToImage;
        this.publishedAt = publishedAt;
        this.content = content;
    }
}