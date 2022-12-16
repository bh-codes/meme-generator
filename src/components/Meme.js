import React from "react"
import memesData from "../memesData.js"

export default function Meme() {

    // state couldn't be left as empty string - will return error so placeholder img was put in
    const [memeImage, setMemeImage]= React.useState("http://i.imgflip.com/1bij.jpg")

    function newMeme() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    return (
        <main>
            <div className="form">
                <input type="text" className="form-input" placeholder="Top Text"></input>
                <input type="text" className="form-input" placeholder="Bottom Text"></input>
                <button className="form-button" onClick={newMeme}>Get a new meme image 🖼</button>
            </div>
            <img src={memeImage} className="meme-image"/>
        </main>
    )
}