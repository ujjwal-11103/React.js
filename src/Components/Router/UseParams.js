import React from 'react'
import { useSearchParams } from 'react-router-dom'
export default function UseParams() {

    const [ParamSearch, setParamSearch] = useSearchParams();
    console.log(ParamSearch.get('age'));
    console.log(ParamSearch.get('city'));

    const age = ParamSearch.get("age")
    const city = ParamSearch.get("city")
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>useSearchParams</h1>
            <h1>Age = {age} </h1>
            <h1>City = {city} </h1>
        </div>
    )
}
