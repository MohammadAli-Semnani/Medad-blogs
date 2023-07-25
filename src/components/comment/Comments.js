import React from "react";
import {useQuery} from "@apollo/client";
import {GET_POST_COMMENT} from "../graphql/queries";

const Comments = ({slug}) => {
  const {data, loading, error} = useQuery(GET_POST_COMMENT, {
    variables: {slug},
  });
  console.log(data);
  return <div></div>;
};

export default Comments;
