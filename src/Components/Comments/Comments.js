import React, { useState, useEffect } from 'react';


const Comments = (props) => {
    const {body,name, email, id} = props.comment;
    const image = props.img
    //console.log(props.img);
    
   // console.log(comment);
    return (   
       <div style={{backgroundColor: '#013945', padding: '9px', margin: '10px',}}>
           <h6 style={{color: '#EBC944'}}>{name}</h6>
           <p style={{color: '#EBC944'}}>{email}  {id}</p>
           <p style={{color: 'white'}}>{body}</p>  
            {
                 image.map(result => <img src={result.images.images} alt=''></img>)
            }   
       </div> 
    );
};

export default Comments;