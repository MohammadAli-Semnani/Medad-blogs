import {gql} from "@apollo/client";

const GET_BLOG_INFO = gql`
  query MyQuery {
    posts {
      author {
        name
        avatar {
          url
        }
      }
      slug
      title
      id
      coverPhoto {
        url
      }
      content {
        text
      }
    }
  }
`;

export default GET_BLOG_INFO;
