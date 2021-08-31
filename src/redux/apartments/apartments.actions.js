import ApartmentActionTypes from "./apartments.types";
import data from './apartments.data'
import { mapApartment } from "./apartments.utils";

import axios from "axios";

export const likeApartment = id => ({
    type: ApartmentActionTypes.LIKE_APARTMENT,
    payload: id
})

export const unlikeApartment = id => ({
    type: ApartmentActionTypes.UNLIKE_APARTMENT,
    payload: id
})

export const requestApartmentsStart = () => ({
    type: ApartmentActionTypes.REQUEST_APARTMENTS_START
});

export const requestApartmentsSuccess = apartments => ({
    type: ApartmentActionTypes.REQUEST_APARTMENTS_SUCCESS,
    payload: apartments
});

export const requestApartmentsFailure = errorMessage => ({
    type: ApartmentActionTypes.REQUEST_APARTMENTS_FAILURE,
    payload: errorMessage
});

export const requestApartments = () => {
    return async (dispatch) => {
        dispatch(requestApartmentsStart());

        try {
            await axios({
                method: "GET",
                url: "https://httpbin.org/anything",
            });

            dispatch(requestApartmentsSuccess(data.map(mapApartment)));

        } catch (error) {
            dispatch(requestApartmentsFailure(error.message));
        }
    };
};