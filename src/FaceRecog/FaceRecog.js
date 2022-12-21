import React from "react";
import './FaceRecog.css';

const FaceRecog = ({ imageUrl, box }) => {
    return (
        <div className="center">
            <div className="absolute mt2">
            <img alt="" src={imageUrl} width='500px' height='auto' />
            <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}} />
            </div>
        </div>
    )
}

export default FaceRecog;