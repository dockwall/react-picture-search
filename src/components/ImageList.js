import React from "react";

const ImageList = (props) => {

    const images = props.images.map(imageObject => {
        return <img src={imageObject.urls.regular} alt={imageObject.alt_description} />
    });

    return <div>{images}</div>;
};

export default ImageList;
