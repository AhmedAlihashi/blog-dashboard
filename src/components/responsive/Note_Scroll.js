import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import BlogItem from "../app/BlogItem";

export const NOTE_SCROLL_MOBILE = ({ col }) => {
  return (
    <Segment
      inverted
      style={{
        marginTop: 10,
        marginBottom: 20,
        minHeight: "20vh",
        maxHeight: "25vh",
        overflowY: "scroll",
        backgroundColor: "#9e8754",
      }}
    >
      <Grid columns={col}>
        <BlogItem />
      </Grid>
    </Segment>
  );
};

export const NOTE_SCROLL_TABLET = ({ col }) => {
  return (
    <Segment
      inverted
      style={{
        maxHeight: "65vh",
        overflowY: "scroll",
        backgroundColor: "#9e8754",
      }}
    >
      <Grid columns={col}>
        <BlogItem />
      </Grid>
    </Segment>
  );
};

export const NOTE_SCROLL_COMPUTER = ({ col }) => {
  return (
    <Segment
      inverted
      style={{
        maxHeight: "65vh",
        overflowY: "scroll",
        backgroundColor: "#9e8754",
      }}
    >
      <Grid columns={col}>
        <BlogItem />
      </Grid>
    </Segment>
  );
};

export const NOTE_SCROLL_LARGESCREEN = ({ col }) => {
  return (
    <Segment
      inverted
      style={{
        maxHeight: "65vh",
        overflowY: "scroll",
        backgroundColor: "#9e8754",
      }}
    >
      <Grid columns={col}>
        <BlogItem />
      </Grid>
    </Segment>
  );
};

export const NOTE_SCROLL_GREATER = ({ col }) => {
  return (
    <Segment
      inverted
      style={{
        maxHeight: "65vh",
        overflowY: "scroll",
        backgroundColor: "#9e8754",
      }}
    >
      <Grid columns={col}>
        <BlogItem />
      </Grid>
    </Segment>
  );
};
