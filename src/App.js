import React, { useEffect, useState } from 'react';

export default function App() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [mobile, setMobile] = useState()

  function submit() {
    let data = { name, email, mobile };
    console.log(data);

    fetch("https://api.openweathermap.org/data/2.5/weather?q=Mumbai%20&appid=c7848b1913cb882c176585e7bfc7f4c1",{
      method : 'POST',
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(data)
    }).then((result)=>{
      console.log("Resulr = ",result);
    })
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Hello</h1>

      <input type="text" value={name} name='name' onChange={(e) => { setName(e.target.value) }} /><br /><br />
      <input type="email" value={email} name='email' onChange={(e) => { setEmail(e.target.value) }} /><br /><br />
      <input type="text" value={mobile} name='mobile' onChange={(e) => { setMobile(e.target.value) }} /><br /><br />
      <button onClick={submit}>Sumit</button>

    </div>
  );
}

const cellStyle = {
  border: '1px solid black',
  padding: '8px',
  textAlign: 'center',
};
