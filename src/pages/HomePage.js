import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ImageCard from "../components/imageCard";

import styles from "./HomePage.module.css";

const HomePage = ({ dataImages }) => {
  return (
    <Container>
      {dataImages.length == 0 ? (
        <div className={styles.contentWrapper}>
          <h3 className={styles.error}>Error please reload page</h3>
        </div>
      ) : (
        <div className={styles.contentWrapper}>
          {dataImages.map((item) => (
            <Link to={`/image/${item.id}`} className="link">
              <ImageCard images={item} key={item.id} />
            </Link>
          ))}
        </div>
      )}
    </Container>
  );
};

export default HomePage;
