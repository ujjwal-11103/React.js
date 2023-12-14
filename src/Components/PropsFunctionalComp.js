import React from 'react'

export default function PropsFunctionalComp(props) {
    const {other} = props;
    return(
        <div>
            <h1>Name = {props.name}</h1>
            <h1>Age = {props.age}</h1>

            {/* Accessing objects */}

            <h1>Address = {props.other.Add}</h1>
            <h1>Address = {props.other.Mob}</h1>

            <p>Name = {other.Add}</p>

        </div>
    )
}