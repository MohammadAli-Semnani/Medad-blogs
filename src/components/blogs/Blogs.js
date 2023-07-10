import React from 'react';
import { useQuery } from '@apollo/client';
import GET_BLOG_INFO from '../graphql/queries';

const Blogs = () => {
    const { data, loading, error } = useQuery(GET_BLOG_INFO)
    data && console.log(data);
    return (
        <>
            
        </>
    );
};

export default Blogs;