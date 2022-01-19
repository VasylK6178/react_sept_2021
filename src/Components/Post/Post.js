import React from 'react';

const Post = (props) => {
    const {userId,title,body} = props
    return (
        <div>
            <div>UserId: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default Post;