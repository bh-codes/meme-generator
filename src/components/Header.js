import React from "react"

export default function Header() {
    return (
        <header className="header-container">
            <img className="header-image" src={require("../images/troll-face.png")} width="32px" /> 
            <h2>Meme Generator</h2>
        </header>
    )
}