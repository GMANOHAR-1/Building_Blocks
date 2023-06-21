import React from 'react'
import { useState,useEffect } from 'react';
import './Block.css';
 
const Block = () => {
    const [blockPosition, setBlockPosition] = useState({ x: 0, y: 0 });
    const [buttonFade, setButtonFade] = useState({
      north: false,
      south: false,
      east: false,
      west: false,
    });
  
    const handleButtonNorth = () => {
      setBlockPosition((prevPosition) => ({ ...prevPosition, y: prevPosition.y - 50 }));
    };
  
    const handleButtonSouth = () => {
      setBlockPosition((prevPosition) => ({ ...prevPosition, y: prevPosition.y + 50 }));
    };
  
    const handleButtonEast = () => {
      setBlockPosition((prevPosition) => ({ ...prevPosition, x: prevPosition.x - 50 }));
    };
  
    const handleButtonWest = () => {
      setBlockPosition((prevPosition) => ({ ...prevPosition, x: prevPosition.x + 50 }));
    };
  
    useEffect(() => {
      const { x, y } = blockPosition;
      setButtonFade({
        north: y <= 0,
        south: y >= 450,
        west: x >= 450,
        east: x <= 0,
      });
    }, [blockPosition]);

  return (
    <div className="rectangle-container">
    <button
      className={`north button ${buttonFade.north ? 'fade' : ''}`}
      onClick={handleButtonNorth}  disabled={buttonFade.north}
    >
     <span>Up</span>
    </button>
    <div className="container">
      <button
        className={`east button ${buttonFade.east ? 'fade' : ''}`}
        onClick={handleButtonEast} disabled={buttonFade.east}
      >
        Left
      </button>
      <div className="main">
        <div className="rectangle" style={{ top: blockPosition.y, left: blockPosition.x }}></div>
      </div>
      <button
        className={`west button ${buttonFade.west ? 'fade' : ''}`}
        onClick={handleButtonWest} disabled={buttonFade.west}
      ><span>Right</span>
       </button>
    </div>
    <button
      className={`south button ${buttonFade.south ? 'fade' : ''}`}
      onClick={handleButtonSouth} disabled={buttonFade.south}
    >
       Down
    </button>
  </div>
  )
}

export default Block