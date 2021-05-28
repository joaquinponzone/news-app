import * as React from "react";
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridRowsProp,
} from "@material-ui/data-grid";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { Avatar, Button, Link, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    height: 650,
    width: "100%",
  },
  table: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
  },
});

const renderAvatar = (params: GridCellParams) => {
  return (
    <strong>
      <Avatar variant="square" src={params?.value as string}></Avatar>
    </strong>
  );
};

const renderViewButton = (params: GridCellParams) => {
  return (
    <strong>
      <Link href={params?.value as string}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
        >
          View
        </Button>
      </Link>
    </strong>
  );
};

const columns: GridColDef[] = [
  {
    field: "image",
    headerName: "Image",
    type: "string",
    renderCell: renderAvatar,
    sortable: false,
    filterable: false,
    align: "center",
    width: 80,
  },
  {
    field: "source",
    headerName: "Source",
    type: "string",
    sortable: false,
    filterable: false,
    align: "left",
    width: 150,
  },
  {
    field: "author",
    headerName: "Author",
    type: "string",
    sortable: false,
    filterable: false,
    align: "left",
    width: 170,
  },
  {
    field: "title",
    headerName: "Title",
    type: "string",
    sortable: false,
    filterable: false,
    align: "left",
    flex: 0.5,
  },
  {
    field: "date",
    headerName: "Date",
    type: "string",
    filterable: false,
    align: "center",
    width: 170,
  },
  {
    field: "url",
    headerName: "URL",
    type: "string",
    sortable: false,
    filterable: false,
    renderCell: renderViewButton,
    align: "center",
    width: 100,
  },
];

export default function DataTable() {
  const classes = useStyles();

  const newsState = useSelector((state: AppState) => state.news.news);
  const news: GridRowsProp = newsState?.map((article, i) => {
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
      <div className={classes.container}>
        <DataGrid
          rows={news}
          columns={columns}
          pageSize={10}
          checkboxSelection={false}
          disableSelectionOnClick
          autoHeight
          className={classes.table}
          disableColumnMenu
          loading={!news.length}
        />
      </div>
    </Paper>
  );
}
