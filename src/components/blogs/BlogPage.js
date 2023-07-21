import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_BLOG_INFO } from '../graphql/queries';
import { useParams } from 'react-router-dom';

const BlogPage = () => {
    const {slug} = useParams()
    const { data, error, loading } = useQuery(GET_BLOG_INFO, {
        variables: {slug}
    })
    data&&console.log(data);
    return (
        <div>
            BlogPage
        </div>
    );
};

export default BlogPage;