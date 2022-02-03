import React from "react";
import { Card } from "react-bootstrap";
import styles from "./ImageCard.module.css";

const ImageCard = ({ images }) => {
  return (
    <Card className={styles.cardWrapper}>
      <Card.Img
        variant="top"
        src={images.thumbnailUrl}
        className={styles.cardImage}
      />
      <Card.Body>
        <Card.Text>{images.title}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
