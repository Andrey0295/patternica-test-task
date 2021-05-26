import React, { useRef } from 'react';

import styles from './ImageLoader.module.css';

const ImageLoader = ({ onChange }) => {
  const inputEl = useRef();
  const handleButtonClick = () => {
    inputEl.current.click();
  };

  return (
    <>
      <div>
        <input
          ref={inputEl}
          className={styles.inputEl}
          type="file"
          onChange={onChange}
        />
      </div>
      <button
        type="button"
        className={styles.btnEl}
        onClick={handleButtonClick}
      >
        Add files
      </button>
    </>
  );
};

export default ImageLoader;
