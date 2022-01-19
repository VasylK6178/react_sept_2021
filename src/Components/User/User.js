import React from 'react';

const User = (props) => {
    const {id,name,username} = props;
    return (
        <div>
            <div>Id: {id} </div>
            <div>Name: {name} </div>
            <div>Userame: {username} </div>
        </div>
    );
};

export default User;