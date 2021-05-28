import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getNews } from "./redux/effects/News";
import DataTable from "./container/Table";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Search from "./container/Search/Search";

const useStyles = makeStyles({
  container: {
    margin: "1rem",
  },
});

export default function News() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [input, setInput] = useState<string>("dogecoin");

  useEffect(() => {
    input.length > 2 && dispatch(getNews(input));
  }, [dispatch, input]);

  const handleInput = (event: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    setInput(event?.target.value);
  };

  return (
    <div className={classes.container}>
      <Search handleInput={handleInput} />
      <DataTable />
    </div>
  );
}
