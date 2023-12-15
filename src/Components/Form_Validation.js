import React, { useState } from 'react'

export default function Form_Validation() {
    const [checkUser, checkingUser] = useState()
    const [checkPass, checkingPass] = useState()
    const [userName, setUserName] = useState(true)
    const [pass, setPass] = useState(true)


    function getData(e) {
        e.preventDefault();
        if (checkUser.length < 3 || checkPass.length < 3) {
            alert("Invalid Credentials")
        }
        else {
            alert("All ok")
        }
    }

    function userHandler(e) {
        let item = e.target.value
        if (e.target.value.length < 3) {
            setUserName(false)
        }
        else {
            setUserName(true)
        }
        checkingUser(item);
    }

    function passHandler(e) {
        let item = e.target.value;
        if (e.target.value.length < 3) {
            setPass(false)
        }
        else {
            setPass(true)
        }
        checkingPass(item)
    }


    return (
        <div>
            <form action="" onSubmit={getData}>

                <input type="text" placeholder='Enter Username ' onChange={userHandler} />{userName ? null : <h5>Invalid Username</h5>} <br />
                <input type="password" placeholder='password' onChange={passHandler} />{pass ? null : <h5>Invalid password</h5>} <br />

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
