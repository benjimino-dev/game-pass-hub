import React, { useState } from 'react';
import './GameImage.css';
import Spinner from '../UI/Spinner/Spinner';
// Description
// This component contains pre-defined styling as well as removes the need to constantly define the IGDB API Image Url.

const GameImage = (props) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <picture>
      {imageLoaded ? null : <Spinner />}
      <img
        className={`GameImage GameImage-${imageLoaded ? 'visible' : 'hidden'}`}
        onClick={props.clicked}
        src={`https://images.igdb.com/igdb/image/upload/t_${props.size}/${props.imageId}.jpg`}
        alt={props.alternate}
        onLoad={() => setImageLoaded(true)}
      />
    </picture>
  );
};

export default GameImage;
