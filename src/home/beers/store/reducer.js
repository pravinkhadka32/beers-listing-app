import actions from './actions';

const initialState = {
    success: false,
    loading: false,
    error: null,
    pagination: {
        page: 1,
        per_page: 10,
    },
    list: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_BEERS:
            return {
                ...state,
                loading: true,
                success: false,
                error: null,
                pagination: {
                    page: action.page,
                    per_page: action.per_page
                }
            };
        case actions.FETCH_BEERS_SUCCESS:

            return {
                ...state,
                success: true,
                loading: false,
                list: [...state.list, ...action.response],
            };
        case actions.FETCH_BEERS_FAILURE:
            return {
                ...state,
                success: false,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default reducer;
