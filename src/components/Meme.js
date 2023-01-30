import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className="input-container">
        <input className="input" type="text" placeholder="Top text" />
        <input className="input" type="text" placeholder="Bottom text" />
        <button onClick={getMemeImage} className="input-btn">
          <p>Get a new meme image 🖼</p>
        </button>
      </div>
      <img className="meme--image" src={meme.randomImage} alt="meme" />
    </main>
  );
}
