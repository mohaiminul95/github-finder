import React from "react";

const  Person = (props) => {
    return (
        <>
            <p>I'm {props.name} & I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <hr/>
        </>
    );
}

export default Person;
