import { GET_NEWS, NewsActionTypes } from "../types/NewsTypes";
import { NewsArticle } from "../interfaces/NewsArticle";

export const getNewsAction = (news: NewsArticle[]): NewsActionTypes => {
  return {
    type: GET_NEWS,
    payload: news,
  };
};
