import React from "react";

import { useDispatch } from "react-redux";
import {
  likeApartment,
  unlikeApartment,
} from "../../redux/apartments/apartments.actions";

import LikeButton from "../like-button/like-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

import "./apartment-card.scss";

export default function ApartmentCard({ apartment }) {
  const dispatch = useDispatch();

  const handleLikeClick = (id) => {
    dispatch(likeApartment(id));
  };

  const handleUnlikeClick = (id) => {
    dispatch(unlikeApartment(id));
  };

  return (
    <div className="apartment-card">
      <h2 className="apartment-card__title">{apartment.title}</h2>
      <h3 className="apartment-card__subtitle">{apartment.address}</h3>
      <ul className="apartment-card__list">
        <li className="apartment-card__list-item">
          Кол-во комнат: <span>{apartment.rooms}</span>
        </li>
        <li className="apartment-card__list-item">
          Площадь: <span>{apartment.area}</span>
        </li>
      </ul>

      {apartment.isLiked ? (
        <LikeButton
          onClick={() => handleUnlikeClick(apartment.id)}
          className="apartment-card__button"
        >
          <FontAwesomeIcon icon={faHeart} />
        </LikeButton>
      ) : (
        <LikeButton
          onClick={() => handleLikeClick(apartment.id)}
          className="apartment-card__button"
        >
          <FontAwesomeIcon icon={farHeart} />
        </LikeButton>
      )}
    </div>
  );
}
