import React from "react";

const Update = props => {
    return (
        <div>
        <h1>{props.user}</h1>
        <h2>{props.usertitle}</h2>
        <p>{props.description}</p>
        <p>{props.project.name}</p>
        </div>
    )
    
}

export default Update;