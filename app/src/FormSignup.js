import {useState} from "react";

export default function FormSignup({setToken}){
    const [nome, setUsername] = useState("");
    const [cognome, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [risposta, setRisposta] = useState("");

    async function salvaSignup(){
        const response = await fetch('http://localhost:8080/signup',
        {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({nome: nome, cognome: cognome, email: email})
        });
        const s = await response.json();
        if(s == false){
            setRisposta(<><br /><span className="error">Valori inseriti invalidi</span></>)
        }else{
            setRisposta("Registrazione nuovo utente");
        }
    }

    function cambioUser(e){
        setUsername(e.target.value);
    }

    function cambioPass(e){
        setPassword(e.target.value);
    }

    function cambioEmail(e){
        setEmail(e.target.value);
    }

    return(
        <>
        <div>Username: <input type="text" onChange={cambioUser} /></div>
        <div>Password:<input type="password" onChange={cambioPass}/></div>
        <div>Email: <input type="text" onChange={cambioEmail}/></div><br />
        <div><button onClick={salvaSignup}>Signup</button></div>
        {risposta}
        </>
    )
}