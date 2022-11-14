import React from "react";
import './ImageList.css';

const ImageList = ({ images, onLastLoad }) => {
    const renderedImages = images.map((image, index) => {
        return (
            <img
                alt={image.description}
                src={image.urls.regular}
                key={image.id}
                onLoad={index === images.length - 1 ? onLastLoad : null}>
            </img>)
    })

    return (
        <div className='image-list'>
            {renderedImages}
        </div>)
}
export default ImageList;
