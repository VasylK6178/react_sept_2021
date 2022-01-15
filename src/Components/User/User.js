import React from 'react';

const User = (props) => {
    const {id,name,username,email,phone} = props;
    return (
        <div>
            <div>Id: {id} </div>
            <div>Name: {name} </div>
            <div>Userame: {username} </div>
            <div>Emaile: {email} </div>
            <div>Phone: {phone} </div>

        </div>
    );
};

export default User;