import React from 'react'
import '../Styles/Navbar.css'

function navBar () {
    return (
        <ul className="navbar">
            <li className="navbarOnglet">Accueil</li>
            <li className="navbarOnglet boite">Homme</li>
            <li className="navbarOnglet boite">Femme</li>
            <li className="navbarOnglet boite">Ado</li>
            <li className="navbarOnglet boite">Enfant</li>
            <li className="navbarOnglet boite">Bébé</li>
            
        </ul>
    )

}

export default navBar