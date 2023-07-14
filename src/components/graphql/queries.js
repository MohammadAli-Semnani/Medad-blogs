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

const GET_AUTHORS_INFO = gql`
  query MyQuery {
    authors {
      avatar {
        id
        url
      }
      name
      slug
    }
  }
`;

export {GET_BLOG_INFO, GET_AUTHORS_INFO};
