import { BeersReducer, BeersSagas } from "./beers/store";

export const homeReducers = {
    beers: BeersReducer
};

export const homeSagas = [
    BeersSagas()
];