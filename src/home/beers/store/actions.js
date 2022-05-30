const actions = {
    FETCH_BEERS: 'FETCH_BEERS',
    FETCH_BEERS_SUCCESS: 'FETCH_BEERS_SUCCESS',
    FETCH_BEERS_FAILURE: 'FETCH_BEERS_FAILURE',

    fetchAll: (page, per_page) => ({
        type: actions.FETCH_BEERS,
        page,
        per_page
    }),
};

export default actions;
