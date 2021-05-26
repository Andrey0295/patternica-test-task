import React from 'react';

import styles from './ImageCard.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import popTransition from './transitions/pop.module.css';
// import textTransition from './transitions/text.module.css';

const ImageCard = ({ allImages, onDelete }) => {
  return (
    <TransitionGroup>
      {allImages.map(({ name, imageURL }) => (
        <CSSTransition key={name} timeout={3000} classNames={popTransition}>
          <figure className={styles.imageBlock}>
            <img src={imageURL} alt="" width="200px" />
            <figcaption className={styles.nameText}>{name}</figcaption>
            <button
              type="button"
              className={styles.deleteBtn}
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

export default ImageCard;

//  <div>
//    {allImages.map(({ name, imageURL }) => (
//      <figure key={name} className={styles.imageBlock}>
//        <img src={imageURL} alt="" width="200px" />
//        <figcaption>{name}</figcaption>
//        <button type="button" onClick={() => onDelete(name)}>
//          Delete
//        </button>
//      </figure>
//    ))}
//  </div>;
