/** @jsx jsx */
import { useContext } from 'react';
import { MyThemeContext, jsx } from "../context";
import { Global } from "@emotion/core";
import { graphql } from "gatsby";
import Header from "../../../../www/src/components/header";

export default ({ data }) => {
  const { theme } = useContext(MyThemeContext);

  return (
    <div>
      <Global styles={{ body: { backgroundColor: theme.colors.background } }} />
      <Header />
      <h1
        sx={{ variant: "textStyles.display", color: "primary" }}
        dangerouslySetInnerHTML={{
          __html: data.wordpressPost.title
        }}
      />
      <div
        sx={{
          "& a": {
            color: "primary",
            "&:hover": {
              color: "secondary"
            }
          },
          "& h1": { variant: "textStyles.display", color: "primary" },
          "& h2": { variant: "textStyles.heading", color: "primary" },
          "& h3": { variant: "textStyles.heading", color: "primary" },
          "& h4": { variant: "textStyles.heading", color: "primary" },
          "& h5": { variant: "textStyles.heading", color: "primary" },
          "& h6": { variant: "textStyles.heading", color: "primary" },
          "& p": { color: "text", fontFamily: "body", lineHeight: "body" },
          "& li": { color: "text", fontFamily: "body", lineHeight: "body" }
        }}
        dangerouslySetInnerHTML={{
          __html: data.wordpressPost.content
        }}
      />
    </div>
  )
};

export const query = graphql`
  query WordPressBlogPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
  }
`;
