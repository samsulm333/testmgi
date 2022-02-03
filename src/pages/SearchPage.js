import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ImageCard from "../components/imageCard";

import styles from "./SearchPage.module.css";

const SearchPage = ({ dataImages, search }) => {
  const [resultSearch, setResultSearch] = useState([]);

  const filterSearchImage = () => {
    const result = dataImages.filter((item) =>
      item.title.includes(search.toLowerCase())
    );
    setResultSearch(result);
  };

  useEffect(() => {
    filterSearchImage();
  }, [resultSearch]);

  return (
    <Container>
      {resultSearch.length == 0 ? (
        <div className={styles.contentWrapper}>
          <h3 className={styles.error}>
            Image with name {search} is not found..
          </h3>
        </div>
      ) : (
        <div className={styles.contentWrapper}>
          {resultSearch.map((item) => (
            <Link to={`/image/${item.id}`} className="link">
              <ImageCard images={item} key={item.id} />
            </Link>
          ))}
        </div>
      )}
    </Container>
  );
};

export default SearchPage;
