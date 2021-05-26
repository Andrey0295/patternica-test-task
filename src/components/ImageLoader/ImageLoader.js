import React, { Component } from 'react';

class ImageLoader extends Component {
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

  render() {
    return (
      <div>
        <input type="file" multiple onChange={this.handleInputChange} />
        <button type="button">Add files</button>

        {this.state.selectedFiles.length > 0 &&
          this.state.selectedFiles.map(file => (
            <figure key={file.name}>
              <img src={file.imageURL} alt="" width="200px" />
              <figcaption>{file.name}</figcaption>
              <button type="button">Delete</button>
            </figure>
          ))}
      </div>
    );
  }
}

export default ImageLoader;
