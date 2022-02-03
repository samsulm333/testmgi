import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavbarComponent from "./components/Navbar";
import HomePage from "./pages/HomePage";
import FavouritePage from "./pages/FavouritePage";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";

function App() {
  const [dataImages, setDataImages] = useState([]);
  const [search, setSearch] = useState("");
  const [favourite, setFavourite] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/albums/1/photos"
      );
      if (res.length == 0) {
        console.log("error");
        return;
      }
      setDataImages(res.data);
    };
    fetchImages();
  }, []);

  return (
    <Router>
      <NavbarComponent setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<HomePage dataImages={dataImages} />} />
        <Route
          path="/image/:id"
          element={<DetailPage dataImages={dataImages} />}
        />
        <Route path="/favourite-image" element={<FavouritePage />} />
        <Route
          path="/search"
          element={<SearchPage dataImages={dataImages} search={search} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
