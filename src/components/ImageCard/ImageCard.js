import React from 'react';
import PropTypes from 'prop-types';

import styles from './ImageCard.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import popTransition from './transitions/pop.module.css';

const ImageCard = ({ allImages, onDelete }) => {
  const { mainBlock, imageBlock, image, nameText, deleteBtn } = styles;
  return (
    <TransitionGroup className={mainBlock}>
      {allImages.map(({ name, imageURL }) => (
        <CSSTransition key={name} timeout={3000} classNames={popTransition}>
          <figure className={imageBlock}>
            <img src={imageURL} className={image} alt="" width="200px" />
            <figcaption className={nameText}>{name}</figcaption>
            <button
              type="button"
              className={deleteBtn}
              onClick={() => onDelete(name)}
            >
              Delete
            </button>
          </figure>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ImageCard.propTypes = {
  onDelete: PropTypes.func.isRequired,
  imageURL: PropTypes.string,
  allImages: PropTypes.array,
  name: PropTypes.string,
};

ImageCard.defaultProps = {
  allImages: [],
  name: '',
  imageURL: '',
};

export default ImageCard;
