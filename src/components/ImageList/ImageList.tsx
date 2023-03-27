import React from "react";
import "./ImageList.css";

interface Image {
  description: string;
  urls: Record<string, string>;
  id: string;
}

interface Props {
  images: Image[];
  onLastLoad: () => void;
}

const ImageList = ({ images, onLastLoad }: Props) => {
  const renderedImages = images.map((image: Image, index: number) => {
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
