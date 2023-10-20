import React from 'react'
import '../Styles/Navbar.css'


function header () {
    return (
        <ul className="navbar">
            <a className="navbarOnglet" href="/" >Accueil</a>
            <a className="navbarOnglet boite" href="/Hommes">Hommes</a>
            <a className="navbarOnglet boite" href="/Femmes">Femmes</a>
            <a className="navbarOnglet boite" href="/Ados">Ados</a>
            <a className="navbarOnglet boite" href="/Enfants">Enfants</a>
            <a className="navbarOnglet boite" href="/Bebes">Bébés</a>
        </ul>
    )

}

export default header