import {useState} from "react";

export default function Informazioni({token}){
    return (
        <>
        <div className="Informazione">
            <p>Id: {token[0]}</p>
            <p>Username: {token[1]}</p>
            <p>email: {token[2]}</p>
        </div>
        </>
    )
}