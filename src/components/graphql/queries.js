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
      title
      slug
      id
      coverPhoto {
        url
      }
    }
  }
`;

export default GET_BLOG_INFO;
