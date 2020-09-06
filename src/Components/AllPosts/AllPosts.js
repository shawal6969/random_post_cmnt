import React, { useState, useEffect } from 'react';
import ShowPost from '../ShowPost/ShowPost';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';



const AllPosts = () => {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    console.log(posts);
return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <div style={{display: 'flex', flexWrap:'wrap'}}>
            {
                posts.map(post=><ShowPost key={posts.id} post={post}></ShowPost>)
            } 
        </div>
      </Container>
    </React.Fragment>
  );
}

export default AllPosts;