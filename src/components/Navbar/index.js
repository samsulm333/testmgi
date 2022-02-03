import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Container,
  InputGroup,
  FormControl,
  Button,
  Nav,
} from "react-bootstrap";
import styles from "./Navbar.module.css";

const NavbarComponent = ({ setSearch }) => {
  let navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleClickSearch = (e) => {
    e.preventDefault();
    if (searchInput === "") {
      alert("Please enter the name of image you want to search for!!");
    } else {
      setSearch(searchInput);
      navigate(`/search?q=${searchInput}`);
      setSearchInput("");
    }
  };
  const handleChangeSearch = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <Navbar bg="light" variant="light" className={styles.navbarWrapper}>
      <Container className="mt-2">
        <Navbar.Brand className="me-5">
          <Link to="/" className="link">
            <h1>PinterTest</h1>
          </Link>
        </Navbar.Brand>

        <InputGroup className="me-5">
          <FormControl
            className={styles.searchInput}
            placeholder="Search Image"
            aria-describedby="basic-addon2"
            onChange={handleChangeSearch}
            value={searchInput}
          />
          <Button
            className={styles.searchButton}
            id="button-addon2"
            onClick={handleClickSearch}
          >
            Search
          </Button>
        </InputGroup>

        <Link to="/favourite-image" className="link">
          <Nav>
            <h5>Favourite</h5>
          </Nav>
        </Link>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
