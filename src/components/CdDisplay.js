import React from "react";
import CdData from "../enkeldata.json";

export default function CdDisplay() {
    return (
        <div className="App">
            <h1>Mina skivor</h1>
            {CdData.cdskivor.map((e) => (
                <div key={e.id}>
                    <h2>{e.artist}</h2>
                    <p>Författare: {e.title}</p>
                    <p>Genre: {e.genre}</p>
                    <p>Utgivningsår: {e.utgivningsår}</p>
                </div>
            ))}
        </div>
    );
}
