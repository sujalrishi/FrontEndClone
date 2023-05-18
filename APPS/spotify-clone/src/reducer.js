export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token:"BQA_6dUiCA8gOXdewpwLTGIfdft80laR4laAjUvuLA3kL64qBBa8WEUAvEmTcEoBS495fEkc_pSWi0H3svzbqIgW8G2UkZ8QOlxyNiegAJnwBfynDrymqwC06j8gt5mGGa04MUB0YLL_KaMVATI73iuM99C84NRWWx4zIioomXFCPGfS_uqW",
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            };

        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            };

        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }

        default:
            return state;
    };
}

export default reducer;