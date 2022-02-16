import Link from "next/link";
import React from "react";
import { Card as BCard } from "react-bootstrap";

import styles from "./Card.module.scss";

interface CardProps {
  slug: string,
  image: string;
  title: string;
  description: string;
}

function Card({ slug, image, title, description }: CardProps) {
  return (
    <BCard className={styles.card}>
      <BCard.Img className="card-img" variant="top" src={image} />
      <BCard.Body className="card-body">
        <BCard.Title className="card-body_title subhead">{title}</BCard.Title>
        <BCard.Text className="card-body_text">{description}</BCard.Text>
        <Link href={`/blog/${slug}`} passHref><button className="btn-app">Xem thêm</button></Link>
      </BCard.Body>
    </BCard>
  );
}

export default Card;
