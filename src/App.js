import logo from './logo.svg';
import './App.css';
// import Greet from './Components/Greet';
import Welcome from './Components/Welcome'
import { Greet } from './Components/Greet';
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Greet />
      <Welcome />
    </div>
  );
}

export default App;
