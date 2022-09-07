import React, { useState, useEffect } from "react";
import courses from "../data/courses.json";
import Card from "./Card";
import "./NoFavorites.css";
import OrganizationSVG from './OrganizationSVG';
import { useNavigate } from "react-router-dom";

const NoFavorites = () => {
  const [noFavorites, setNoFavorites] = useState();
  let navigate = useNavigate();
  useEffect(() => {
    const favorite = async () => {
      const noFavorite = await courses.filter((course) => !course.is_favorite);
      setNoFavorites(noFavorite);
    };

    favorite();
  }, []);
  return (
    <div className="nofavorites">
      <div className="container">
        <div className="App__title">
          <OrganizationSVG />
          <div className="App__desc">
            <span>Training powered by</span>
            <h2>MY ORGANIZATION</h2>
          </div>
        </div>
        <button className="btn" onClick={() => navigate('/')}>
          Return
        </button>
      </div>
      <div className="nofavorites__cards">
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
  );
};

export default NoFavorites;
