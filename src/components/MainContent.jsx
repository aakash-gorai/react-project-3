import React from "react";
import TrollFace from "/images/troll-face.png";
import MemeData from "../memesData.js";

function MainContent() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    url: "http://i.imgflip.com/1bij.jpg",
  });

  function getMemeImg() {
    const memeArray = MemeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    //   setUrl(memeArray[randomNumber].url);
    setMeme((prev) => ({
      ...prev,
      url: memeArray[randomNumber].url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(meme.bottomText);
  }
  return (
    <>
      <main>
        <div className="form">
          <input
            type="text"
            name="topText"
            className="form-input"
            placeholder="Top Text"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            name="bottomText"
            className="form-input"
            placeholder="Bottom Text"
            value={meme.bottomText}
            onChange={handleChange}
          />
          <button className="form-button" onClick={getMemeImg}>
            Get a new meme image
          </button>
        </div>
        <div className="meme">
          <img src={meme.url} className="meme--image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </main>
    </>
  );
}

export default MainContent;
