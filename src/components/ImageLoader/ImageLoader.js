import React, { useRef } from 'react';
import PropTypes from 'prop-types';

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
          accept="image/*"
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

ImageLoader.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ImageLoader;
