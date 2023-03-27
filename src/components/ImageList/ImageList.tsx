import React from "react";
import "./ImageList.css";

export interface ImageData {
  description: string;
  urls: Record<string, string>;
  id: string;
}

interface Props {
  images: ImageData[];
  onLastLoad: () => void;
}

const ImageList = ({ images, onLastLoad }: Props) => {
  const renderedImages = images.map((image: ImageData, index: number) => {
    return (
      <img
        alt={image.description}
        src={image.urls.regular}
        key={image.id}
        onLoad={index === images.length - 1 ? onLastLoad : null}
      ></img>
    );
  });

  return <div className="image-list">{renderedImages}</div>;
};

export default ImageList;
