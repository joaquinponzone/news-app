import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
} from "@material-ui/data-grid";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { Avatar, Button, Link, Paper } from "@material-ui/core";

const columns: GridColDef[] = [
  {
    field: "image",
    headerName: "Avatar",
    type: "string",
    sortable: false,
    filterable: false,
    flex: 0.1,
    renderCell: (params: GridValueGetterParams) => (
      <strong>
        <Avatar variant="square" src="value" />
      </strong>
    ),
  },
  {
    field: "source",
    headerName: "Source",
    type: "string",
    flex: 0.2,
  },
  { field: "author", headerName: "Author", type: "string", flex: 0.2 },
  {
    field: "title",
    headerName: "Title",
    type: "string",
    flex: 0.2,
  },
  {
    field: "date",
    headerName: "Date",
    type: "string",
    flex: 0.2,
  },
  {
    field: "url",
    headerName: "URL",
    type: "string",
    flex: 0.2,
    renderCell: (params: GridValueGetterParams) => (
      <Button onClick={() => alert(params.value)}>View</Button>
    ),
  },
];

export default function DataTable() {
  const newsState = useSelector((state: AppState) => state.news.news);
  const news = newsState?.map((article, i) => {
    return {
      id: i,
      image: article.urlToImage,
      source: article.source.name,
      author: article.author,
      title: article.title,
      date: article.publishedAt,
      url: article.url,
    };
  });
  return (
    <Paper elevation={3}>
      <div style={{ display: "flex", height: 650, width: "100%" }}>
        <DataGrid
          rows={news}
          columns={columns}
          pageSize={10}
          checkboxSelection={false}
        />
      </div>
    </Paper>
  );
}
