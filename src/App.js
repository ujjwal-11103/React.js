import React from 'react'
import SendingDataChildToPraent from './Components/SendingDataChildToPraent'
export default function App() {

  function Testing(items) {
    console.log(items);
  }

  return (
    <div>
      <SendingDataChildToPraent data={Testing} />
    </div>
  )
}
