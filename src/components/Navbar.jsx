import React from "react"
import TrollFace from "/images/troll-face.png"

function Navbar() {
    return (
      <>
        <nav>
          <div className="nav-bar-left">
                    <img src={TrollFace} alt="troll-face" />
                    <h1 className="proj-name">Meme Generator</h1>
                </div>
                <h2>React Course-Project-3</h2>
        </nav>
      </>
    );
}

export default Navbar