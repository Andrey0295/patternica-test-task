import React, { Component } from 'react';

import ImageLoader from '../ImageLoader/ImageLoader';

import ImageCard from '../ImageCard/ImageCard';

class GalleryMain extends Component {
  state = {
    selectedFiles: [],
  };

  handleInputChange = e => {
    let file = e.target.files[0];

    this.upLoadImage(file);
  };

  upLoadImage = file => {
    const reader = new FileReader();
    reader.onload = event => {
      const imageData = {
        imageURL: event.target.result,
        name: file.name,
      };
      const filter = this.state.selectedFiles.filter(
        image => image.name === imageData.name,
      );
      filter.length > 0
        ? alert('This file already in gallery')
        : this.setState(prevState => ({
            selectedFiles: [...prevState.selectedFiles, imageData],
          }));

      console.log(imageData);
    };
    reader.readAsDataURL(file);
  };

  deleteImage = name => {
    console.log(name);
    this.setState(prevState => ({
      selectedFiles: prevState.selectedFiles.filter(
        image => image.name !== name,
      ),
    }));
  };

  render() {
    return (
      <div>
        <ImageLoader onChange={this.handleInputChange} />

        <ImageCard
          allImages={this.state.selectedFiles}
          onDelete={this.deleteImage}
        />
      </div>
    );
  }
}

export default GalleryMain;