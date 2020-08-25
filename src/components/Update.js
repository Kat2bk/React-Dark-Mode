import React from "react";

const Update = (props) => {
    console.log("props from update", props)
    return (
        <div>
        <h2>{props.description}</h2>
        </div>
    )
}

export default Update;