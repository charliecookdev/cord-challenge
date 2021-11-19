import React from "react";

const Tile = ({ title, image, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="tile-container">
        <div className="tile-image-container">
          <img className="tile-image" src={image.url} alt={image.alt} />
        </div>
        <div className="tile-inner-container">
          <p className="title">
            {title.length >= 40 ? `${title.substr(0, 50)}...` : title}
          </p>
          <p className="subtitle">NEWS</p>
        </div>
      </div>
    </a>
  );
};

export default Tile;
