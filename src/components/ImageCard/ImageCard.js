import React from 'react';

const ImageCard = ({ allImages, onDelete }) => {
  return (
    <div>
      {allImages.map(({ name, imageURL }) => (
        <figure key={name}>
          <img src={imageURL} alt="" width="200px" />
          <figcaption>{name}</figcaption>
          <button type="button" onClick={() => onDelete(name)}>
            Delete
          </button>
        </figure>
      ))}
    </div>
  );
};

export default ImageCard;
