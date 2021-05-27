import React, { Component } from 'react';

import ImageLoader from '../ImageLoader/ImageLoader';
import ImageCard from '../ImageCard/ImageCard';

import styles from './GalleryMain.module.css';

class GalleryMain extends Component {
  state = {
    selectedFiles: [],
  };

  componentDidMount() {
    const images = localStorage.getItem('images');
    const parsedImages = JSON.parse(images);

    if (parsedImages) {
      this.setState({ selectedFiles: parsedImages });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedFiles } = this.state;
    localStorage.setItem('images', JSON.stringify(selectedFiles));
  }

  handleInputChange = e => {
    let file = e.target.files[0];

    this.upLoadImage(file);
  };

  upLoadImage = file => {
    const reader = new FileReader();

    reader.onload = event => {
      const { result } = event.target;
      const { selectedFiles } = this.state;
      const imageData = {
        imageURL: result,
        name: file.name,
      };
      const filter = selectedFiles.filter(
        image => image.name === imageData.name,
      );
      filter.length > 0
        ? alert('This file already in gallery')
        : this.setState(({ selectedFiles }) => ({
            selectedFiles: [...selectedFiles, imageData],
          }));
    };
    reader.readAsDataURL(file);
  };

  deleteImage = name => {
    this.setState(({ selectedFiles }) => ({
      selectedFiles: selectedFiles.filter(image => image.name !== name),
    }));
  };

  render() {
    const { selectedFiles } = this.state;
    return (
      <div className={styles.galleryMainBlock}>
        <ImageLoader onChange={this.handleInputChange} />

        <ImageCard allImages={selectedFiles} onDelete={this.deleteImage} />
      </div>
    );
  }
}

export default GalleryMain;
