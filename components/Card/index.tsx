import React from "react";
import { Card as BCard } from "react-bootstrap";

import styles from "./Card.module.scss";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

function Card({ image, title, description }: CardProps) {
  return (
    <BCard className={styles.card}>
      <BCard.Img className="card-img" variant="top" src={image} />
      <BCard.Body className="card-body">
        <BCard.Title className="card-body_title subhead">{title}</BCard.Title>
        <BCard.Text className="card-body_text">{description}</BCard.Text>
        <button className="btn-app">Xem thêm</button>
      </BCard.Body>
    </BCard>
  );
}

export default Card;
