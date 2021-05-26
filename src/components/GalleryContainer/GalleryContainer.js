import React from 'react';

import ImageLoader from '../GalleryMain/GalleryMain';

import styles from './GalleryContainer.module.css';

const GalleryContainer = () => {
  return (
    <div className={styles.galleryBlock}>
      <p>Gallery container</p>
      <ImageLoader />
    </div>
  );
};

export default GalleryContainer;
