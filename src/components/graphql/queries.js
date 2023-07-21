import {gql} from "@apollo/client";

const GET_BLOG_INFO = gql`
  query getBlog($slug: String!) {
    post(where: {slug: $slug}) {
      id
      author {
        avatar {
          url
        }
        field
        name
      }
      content {
        html
      }
      coverPhoto {
        url
      }
      title
    }
  }
`;
const GET_BLOGS_INFO = gql`
  query MyQuery {
    posts {
      author {
        name
        slug
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
        html
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

const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!) {
    author(where: {slug: $slug}) {
      avatar {
        url
      }
      description {
        html
      }
      name
      posts {
        content {
          html
        }
        coverPhoto {
          url
        }
        id
        slug
        title
      }
    }
  }
`;
export {GET_BLOGS_INFO, GET_BLOG_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO};
