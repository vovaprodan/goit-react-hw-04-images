import React from "react";
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';



export const ImageGalleryItem = ({ pictureId, webformatURL, largeImageURL , onToggle}) => {
    return <li onClick={() => onToggle(largeImageURL)} key={pictureId} className={css.ImageGalleryItem_image}>
      <img src={webformatURL} alt="" />   
  </li>
  
}

ImageGalleryItem.propTypes = {
   pictureNew: PropTypes.array,
  }