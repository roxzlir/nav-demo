import React from "react";
import BookData from "../enkeldata.json";

// const BookDisplay = () => {
//     return (
//         <div>
//             <h1>Mina böcker</h1>
//             {BookData.böcker.map((e) => (
//                 <div key={e.id}>
//                     <h2>{e.titel}</h2>
//                     <p>Författare: {e.författare}</p>
//                     <p>Genre: {e.genre}</p>
//                     <p>Utgivningsår: {e.utgivningsår}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default BookDisplay;

//Skapar en funktion där vi kör BookData som vi importerat vår json fil
//med. Sen kör vi BookData.böcker då det är nyckeln i json filen,
//hade vi ej haft nyckel hade vi kört en tom [].
//Sen kör vi .map och behöver ett expression (vad som helst) och kör sen
//en arrow och notera att vi behöver en unik key value för att
//kunna hantera detta!

export default function BookDisplay() {
    return (
        <div className="App">
            <h1>Mina böcker</h1>
            {BookData.böcker.map((e) => (
                <div key={e.id}>
                    <h2>{e.titel}</h2>
                    <p>Författare: {e.författare}</p>
                    <p>Genre: {e.genre}</p>
                    <p>Utgivningsår: {e.utgivningsår}</p>
                </div>
            ))}
        </div>
    );
}
