import React from 'react';
import { useQuery } from '@apollo/client';
import GET_BLOG_INFO from '../graphql/queries';
import BlogCard from './BlogCard';
import { Grid } from '@mui/material';

const Blogs = () => {
    const { data, loading, error } = useQuery(GET_BLOG_INFO)
    data && console.log(data);
    return (
      <>
        <Grid container >
          {data &&
            data.posts.map((blog) => (
              <Grid xs={12} md={6}>
                <BlogCard {...blog} />
              </Grid>
            ))}
        </Grid>
      </>
    );
};

export default Blogs;