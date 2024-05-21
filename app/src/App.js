import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import FormLogin from "./FormLogin";
import FormSignup from "./FormSignup";
import Informazioni from './Informazioni';



function App() {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [token, setToken] = useState("");


  return (
    <div className="App">
      {
        token === "" ? 
        <>
          <br />
          {
            login ?
            <>
              <div><FormLogin setToken={setToken}/></div>
              <button onClick={() => setLogin(false)}>Annulla</button>
            </>
          :
          <button onClick={() => setLogin(true)}>Login</button>
          } 
          <hr />
          {
            signup ?
              <>
              <div><FormSignup setToken={setToken}/></div>
              <button onClick={() => setSignup(false)}>Annulla</button>
              </>
            :
            <button onClick={() => setSignup(true)}>Signup</button>
          }
        </>
        :
        <>
        <Informazioni setToken={token}/>
        <button onClick={() => setToken("")}>Logout</button>
        </>
        
      }
      
    </div>
  );
}

export default App;
