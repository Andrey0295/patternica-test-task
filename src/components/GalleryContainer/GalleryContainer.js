import React from 'react';

import GalleryMain from '../GalleryMain/GalleryMain';

import styles from './GalleryContainer.module.css';

const GalleryContainer = () => {
  return (
    <div className={styles.galleryBlock}>
      <GalleryMain />
    </div>
  );
};

export default GalleryContainer;
