import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "./redux/effects/News";
// import { NewsArticle } from "./redux/interfaces/NewsArticle";
// import { AppState } from "./redux/store";
import DataTable from "./components/Table";

export default function News() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <div
      style={{
        margin: "3rem",
      }}
    >
      {/* {Search}
      {NewsArticles} */}
      <DataTable />
    </div>
  );
}
