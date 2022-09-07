import { useState, useEffect } from "react";
import courses from "../data/courses.json";
import Card from "./Card";
import ConnectionsSVG from "./ConnectionsSVG";
import { useNavigate } from "react-router-dom";
import './Favorites.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    const favorite = async () => {
      const favorite = await courses.filter((course) => course.is_favorite);
      setFavorites(favorite);
    };

    favorite();
  }, []);

  return (
    <div className="favorites">
      <div className="container">
        <div className="App__title">
          <ConnectionsSVG />
          <div className="App__desc">
            <span>Training powered by</span>
            <h2>MY CONNECTIONS</h2>
          </div>
        </div>
        <button className="btn" onClick={() => navigate("/")}>
          Return
        </button>
      </div>
      <div className="favorites__cards">
        {favorites?.map((favorite) => (
          <Card
            key={favorite.id}
            img={favorite.image}
            language={favorite.language}
            country={favorite.country}
            isFavorite={favorite.is_favorite}
            company={favorite.company_name}
            title={favorite.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
