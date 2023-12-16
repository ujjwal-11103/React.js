import React, { useState } from 'react';
import Render_life_cycle_method from './Components/Render_life_cycle_method';
function App() {
  const [data1, setData1] = React.useState("Testing-1")
  return (
    <div>
      <Render_life_cycle_method data={data1} />
      <button onClick={() => setData1("Testing-2")}>Click</button>
    </div>
  )
}
export default App;   