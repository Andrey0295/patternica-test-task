import React from 'react';

const ImageLoader = ({ onChange }) => {
  return (
    <div>
      <input type="file" multiple onChange={onChange} />
      <button type="button">Add files</button>
    </div>
  );
};

export default ImageLoader;
