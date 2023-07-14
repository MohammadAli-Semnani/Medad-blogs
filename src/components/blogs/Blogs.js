import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import {GET_BLOG_INFO} from '../graphql/queries';
import BlogCard from './BlogCard';
import { Grid } from '@mui/material';
import Aos from 'aos';
import "aos/dist/aos.css"

const Blogs = () => {
  useEffect(() => {
    Aos.init({duration:2000})
  },[])
    const { data, loading, error } = useQuery(GET_BLOG_INFO)
    data && console.log("post", data);
    return (
      <>
        <Grid container>
          {data &&
            data.posts.map((blog) => (
              <Grid component="div" xs={12} md={4} sm={6} data-aos="zoom-in">
                <BlogCard {...blog} />
              </Grid>
            ))}
        </Grid>
      </>
    );
};

export default Blogs;