import ApartmentActionTypes from "./apartments.types";
import { likeApartment, unlikeApartment } from "./apartments.utils";

const INITIAL_STATE = {
    apartments: [],
    isLoading: false,
    errorMessage: null
};

const apartmentsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ApartmentActionTypes.REQUEST_APARTMENTS_START:
            return {
                ...state,
                isLoading: true
            };
        case ApartmentActionTypes.REQUEST_APARTMENTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                apartments: action.payload
            };
        case ApartmentActionTypes.REQUEST_APARTMENTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            };
        case ApartmentActionTypes.LIKE_APARTMENT:
            return {
                ...state,
                apartments: likeApartment(state.apartments, action.payload)
            };
        case ApartmentActionTypes.UNLIKE_APARTMENT:
            return {
                ...state,
                apartments: unlikeApartment(state.apartments, action.payload)
            };
        default:
            return state;
    }
};

export default apartmentsReducer;