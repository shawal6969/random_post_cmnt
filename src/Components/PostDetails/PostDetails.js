import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import images from '../images/images';
import { Container } from '@material-ui/core';


const PostDetails = (props) => {
    let {id} = useParams(); //react url parameter

    //the below hook is for loading specific post based on id of the post
    const [singlePost,setSinglePost] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setSinglePost(data))
    },[])

    //the below hooks is for loading the comments of the post based on post id
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(reply => reply.json())
        .then(result => setComments(result))
    },[])
    //console.log(comments);

    // eslint-disable-next-line no-use-before-define
    const [img, setImg] = useState(images)
    
    return (
        <Container>
            <div>
                <h1>This is post no: {id} </h1>
                <h3 style={{color: 'rgb(185, 68, 68)'}}>{singlePost.title}</h3>
                <h1 style={{color: '#829356'}}>{singlePost.body}</h1>
                <h4>Comments</h4>
                    {
                        comments.map(comment => <Comments key={comment.id} img={img} comment={comment}></Comments>)
                    }
            </div>
        </Container>
    );
};

export default PostDetails;