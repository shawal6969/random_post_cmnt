import React, { useState, useEffect } from 'react';
import SimpleCard from '../PostHeading/PostHeading';
import { Grid, Box } from '@material-ui/core';
import { spacing } from '@material-ui/system';

const Posts = () => {
    const [posts,setPost] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[]);
    console.log(posts);
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <Grid container justify='center' >
                        {
                            posts.map(post => <SimpleCard post={post} ></SimpleCard>)
                        }
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Posts;