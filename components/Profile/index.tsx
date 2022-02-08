import React from "react";
import { Card as BCard } from "react-bootstrap";

import styles from "./Profile.module.scss";

interface ProfileProps {
  image: string;
  name: string;
  description: string;
}

function Profile({ image, name, description }: ProfileProps) {
  return (
    <BCard className={styles.profile}>
      <BCard.Img className="profile-img" variant="top" src={image} />
      <BCard.Body className="profile-body">
        <BCard.Title className="profile-body_title subhead">{name}</BCard.Title>
        <BCard.Text className="profile-body_text">{description}</BCard.Text>
      </BCard.Body>
    </BCard>
  );
}

export default Profile;
