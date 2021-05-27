import { NewsArticle } from "../interfaces/NewsArticle";

export const GET_NEWS = "GET_NEWS";

export interface GetNewsStateType {
  news: NewsArticle[];
}

interface GetNewsActionType {
  type: typeof GET_NEWS;
  payload: NewsArticle[];
}
export type NewsActionTypes = GetNewsActionType;
