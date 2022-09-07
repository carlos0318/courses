import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import courses from "./data/courses.json";
import ConnectionsSVG from "./components/ConnectionsSVG";
import OrganizationSVG from "./components/OrganizationSVG";
import { useNavigate } from "react-router-dom";

function App() {
  const [favorites, setFavorite] = useState([]);
  const [noFavorites, setNoFavorite] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const favorite = async () => {
      const favorite = await courses.filter((course) => course.is_favorite);
      const noFavorite = await courses.filter((course) => !course.is_favorite);

      setFavorite([
        favorite[0],
        favorite[1],
        favorite[2],
        favorite[3],
        favorite[4],
      ]);
      setNoFavorite([
        noFavorite[0],
        noFavorite[1],
        noFavorite[2],
        noFavorite[3],
        noFavorite[4],
      ]);
    };

    favorite();
  }, []);
  return (
    <div className="App">
      <div className="App__isFavorite">
        <div className="container">
          <div className="App__title">
            <ConnectionsSVG />
            <div className="App__desc">
              <span>Training powered by</span>
              <h2>MY CONNECTIONS</h2>
            </div>
          </div>
          <button className="btn" onClick={() => navigate('/favorites')}>View more</button>
        </div>
        <div className="App__container">
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
      <div className="App__isNotFavorite">
        <div className="container">
          <div className="App__title">
            <OrganizationSVG />
            <div className="App__desc">
              <span>Training powered by</span>
              <h2>MY ORGANIZATION</h2>
            </div>
          </div>
          <button className="btn" onClick={() => navigate('/nofavorites')}>View more</button>
        </div>
        <div className="App__container">
          {noFavorites?.map((noFavorite) => (
            <Card
              key={noFavorite.id}
              img={noFavorite.image}
              language={noFavorite.language}
              country={noFavorite.country}
              isFavorite={noFavorite.is_favorite}
              company={noFavorite.company_name}
              title={noFavorite.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
