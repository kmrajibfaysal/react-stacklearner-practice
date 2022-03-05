import React from 'react';

function Bio({ name, title, description }) {
    return (
        <div className="Bio">
            <h3>{name}</h3>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    );
}

export default Bio;
