import { TextField } from "@material-ui/core";
import React from "react";

export default function Search(props: any) {
  return (
    <div>
      <TextField
        variant="outlined"
        color="primary"
        margin="normal"
        label="Search"
        onChange={props.handleInput}
        fullWidth
      />
    </div>
  );
}
