import { getNewsAction } from "../actions/NewsActions";
import { Dispatch } from "redux";
import { NewsActionTypes } from "../types/NewsTypes";
const API_KEY = "4c40ce97738b4a69936f4e3fd91d80b5";

export const getNews = (input: string) => {
  return function (dispatch: Dispatch<NewsActionTypes>) {
    const URL = `https://newsapi.org/v2/everything?q=${input}&language=en&pageSize=100&apiKey=${API_KEY}`;
    fetch(URL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(getNewsAction(data.articles));
        return data.articles;
      });
  };
};
