export interface NewsArticle {
  id: number;
  urlToImage: string;
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  publishedAt: string;
  url: string;
}
