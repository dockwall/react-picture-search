import React from "react";
import './ImageList.css';

const ImageList = ({ images }) => {
    const renderedImages = images.map(image => {
        return (
            <img
                alt={image.description}
                src={image.urls.regular}
                key={image.id}>
            </img>)
    })
    return (
        <div className='image-list'>
            {renderedImages}
        </div>)
}
export default ImageList;
