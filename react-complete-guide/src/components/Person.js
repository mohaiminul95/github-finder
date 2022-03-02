import React from "react";

const  Person = (props) => {
    return (
        <>
            <p onClick={props.click}>I'm {props.name} & I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <hr/>
        </>
    );
}

export default Person;
