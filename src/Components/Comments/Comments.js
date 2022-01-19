import React, {useEffect, useState} from 'react';
import Comment from "../Comment/Comment";

const Comments = () => {

    const [coments,setcoment]=useState([])
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value =>setcoment(value) )
        },[])

    return (
        <div>
            {coments.map(value => <Comment key={value.id} postId={value.postId}  name={value.name}  body={value.body}/>)}
        </div>
    );
};

export default Comments;