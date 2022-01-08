import React from 'react';

function Formulaire() {
    return(
        <div>
            <form>
                <h3>ENREGISTREMENT</h3>
                <label>Nom     :</label>
                <input type="text"></input> <br />
                <label>Prenom  :</label>
                <input type="text"></input> <br />
                <label>Matricul:</label>
                <input type="text"></input> <br />
                <label>Date    :</label>
                <input type="date"></input> <br />
                
            </form>
        </div>
    )
}
export default Formulaire;