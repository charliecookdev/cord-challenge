import React from "react";
import Tile from "../Components/Tile";
import "./StoryGrid.css";

const StoryGrid = ({ articles }) => {
  return (
    <div className='grid'>
      {articles.map(({ title, image, url, source }) => (
        <div className="m-10" key={title}>
          <Tile title={title} image={{ url: image, alt: source.name }} link={url} />
        </div>
      ))}
    </div>
  );
};

export default StoryGrid;
