import React, { Fragment, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { requestApartments } from "../../redux/apartments/apartments.actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./apartments.scss";

import ApartmentList from "../../components/apartment-list/apartment-list";

export default function Apartments() {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.apartmentsReducer.isLoading);
  const apartments = useSelector((state) => state.apartmentsReducer.apartments);
  const errorMessage = useSelector(
    (state) => state.apartmentsReducer.errorMessage
  );

  const likeApartment = () => {};

  useEffect(() => {
    dispatch(requestApartments());
  }, []);

  return (
    <Fragment>
      <main>
        <section className="apartments">
          <div className="apartments__container">
            <div>
              <a
                href="https://github.com/AGrinvald/flats-app"
                className="apartments__link"
              >
                {" "}
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div className="apartments__title">The Apartments</div>
            <ApartmentList
              isLoading={isLoading}
              errorMessage={errorMessage}
              apartments={apartments}
              likeApartment={likeApartment}
            ></ApartmentList>
          </div>
        </section>
      </main>
    </Fragment>
  );
}
