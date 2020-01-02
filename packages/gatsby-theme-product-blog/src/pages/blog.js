/** @jsx jsx */
import { useContext } from 'react';
import { MyThemeContext, jsx } from "../context";
import { Global } from "@emotion/core";

import { graphql } from "gatsby";
import Header from "../../../../www/src/components/header";
import * as Text from "../../../../www/src/components/text";

export default props => {
  const { theme } = useContext(MyThemeContext);

  return (
    <div>
      <Global styles={{ body: { backgroundColor: theme.colors.background } }} />
      <Header />
      {props.data.allWordpressPost.nodes.map(node => (
        <div key={node.id}>
          <Text.Link to={`/blog/${node.slug}`}>
            <strong
              dangerouslySetInnerHTML={{
                __html: node.title
              }}
            />
          </Text.Link>
          <p
            dangerouslySetInnerHTML={{
              __html: node.excerpt
            }}
            sx={{
              color: "text",
              fontFamily: "body",
              lineHeight: "body"
            }}
          />
        </div>
      ))}
    </div>
  )
};

export const query = graphql`
  query AllProductBlogsPage {
    allWordpressPost {
      nodes {
        id
        title
        slug
        excerpt
      }
    }
  }
`;
