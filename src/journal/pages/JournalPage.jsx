import { AddOutlined } from "@mui/icons-material";
import { Button, IconButton, Typography } from "@mui/material";
import React from "react";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView, NoteView } from "../views/";

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: 'fixed',
          right:50,
          bottom: 50
        }}

      >
        <AddOutlined sx={{fontSize: 30}}/>
      </IconButton>

      {/* <NoteView /> */}
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tenetur eum deserunt beatae libero quisquam soluta! Laudantium sunt, eius provident ullam minus neque. Ea distinctio, accusamus amet expedita odit quo.
      </Typography> */}
    </JournalLayout>
  );
};
