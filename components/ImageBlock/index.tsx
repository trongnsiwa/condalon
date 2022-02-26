import React from "react";
import styles from "./ImageBlock.module.scss";

interface ImageBlockProps {
  title: string;
  description: string;
  img: string;
}

function ImageBlock({ title, description, img }: ImageBlockProps) {
  return (
    <div className={styles.imageBlock}>
      <img src={`https:${img}`} alt={title} className="imageBlock-image" />
      <div className="imageBlock-description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ImageBlock;
