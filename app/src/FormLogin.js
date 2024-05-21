import {useState} from "react";

export default function FormLogin({setToken}){
    const [nome, setUsername] = useState("");
    const [cognome, setPassword] = useState("");
    const [risposta, setRisposta] = useState("");

    

    async function salvaLogin(){
        const response = await fetch('http://localhost:8080/login', 
        {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({nome: nome, cognome: cognome})
        });
        const t = await response.json();
        if(t.token === ''){
            setRisposta(<><br /><span>Valori inseriti invalidi</span><br /></>)
        }else{
            getToken(t.token);
        }
    }

    async function getToken(token){
        const response = await fetch('http://localhost:8080/login',{
            method: "GET",
            headers: { 'Content-Type': 'application/json'}
        });
        const a = await response.json();
        let utente = [a.id, a.username, a.email, a.token, a.reg_date];
        setToken(utente);
    }



    function cambioUser(e){
        setUsername(e.target.value);
    }

    function cambioPass(e){
        setPassword(e.target.value);
    }

    return(
        <>
            <div>Username: <input type="text" onChange={cambioUser} /></div>
            <div>Password:<input type="password" onChange={cambioPass}/></div><br />
            <div><button onClick={salvaLogin}>Login</button></div>
            {risposta}  
        </>
    )
    
}