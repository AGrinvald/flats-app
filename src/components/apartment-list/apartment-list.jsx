import React, { Fragment } from "react";
import "./apartment-list.scss";

import Loader from "../loader/loader";
import ApartmentCard from "../apartment-card/apartment-card";

export default function ApartmentList({ apartments, isLoading }) {
  const apartmentCards = apartments.map((item, index) => {
    return (
      <div key={item.id} className="apartment-list__item">
        <ApartmentCard apartment={item} />
      </div>
    );
  });

  return (
    <Fragment>
      <div className="apartment-list">
        {apartmentCards.length > 0 && apartmentCards}
      </div>
      {isLoading && <Loader />}
    </Fragment>
  );
}
