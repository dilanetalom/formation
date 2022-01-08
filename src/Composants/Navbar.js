import React from "react";
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <div className="container">
                <div className="titre">React</div>
                <div></div>
                <div className="lien">
                    <a href="./Liste.html"><button>Liste</button></a>
                    <a href="./Tableau.html"><button>Tableau</button></a>
                    <a href="./Formulaire.html"><button>Formulaire</button></a>
                </div>
            </div>
        </div>
    )
}
export default Navbar;