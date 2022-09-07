import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = ({ img, language, country, isFavorite, company, title }) => {
  const [countryImg, setCountryImg] = useState();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => setCountryImg(data[0].flags.png))
    .catch(error => console.error(error));
  }, [])

  return (
    <div className="card">
      <div className="card__img">
        <img src={img} alt="logo" />
      </div>
      <div className={isFavorite ? "card__info--favorite" : "card__info--no-favorite"}>
        <div className={isFavorite ? "card__language--favorite" : "card__language--no-favorite"}>
          <span>{language}</span>
        </div>
        <div className="card__title">{title}</div>
        <div className="card__country">
          <div className="card__company">{company}</div>
          <img
            src={countryImg}
            alt={country}
            title={country}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
