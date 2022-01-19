import React from 'react';

const Comment = (props) => {
    const {postId,name,body}=props;
    return (
        <div>
            <div>PostId: {postId}</div>
            <div>Name: {name}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default Comment;