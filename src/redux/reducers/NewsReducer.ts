import {
  GET_NEWS,
  GetNewsStateType,
  NewsActionTypes,
} from "../types/NewsTypes";

const initialStateGetNews: GetNewsStateType = {
  news: [],
};

export const getNewsReducer = (
  state = initialStateGetNews,
  action: NewsActionTypes
): GetNewsStateType => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    default:
      return state;
  }
};
