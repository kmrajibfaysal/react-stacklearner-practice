import React from 'react';

function MyProps({ name }) {
    console.log('My props - ', name);
    return <h1>My Name is, {name}</h1>;
}

export default MyProps;
