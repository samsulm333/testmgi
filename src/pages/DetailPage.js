import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import styles from "./DetailPage.module.css";

const DetailPage = ({ dataImages }) => {
  const { id } = useParams();
  const [image, setImage] = useState({});

  useEffect(() => {
    setImage(dataImages.find((item) => item.id == id));
  }, []);

  console.log(id);
  console.log(image);

  return (
    <Container fluid className={styles.container}>
      <Container className={styles.contentWrapper}>
        <div className={styles.detailImage}>
          <img src={image.thumbnailUrl} alt={image.title} />
        </div>
        <div className={styles.detailTitle}>
          <h2>{image.title}</h2>
        </div>
      </Container>
    </Container>
  );
};

export default DetailPage;
