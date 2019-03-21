import {FETCH_BOARD_SUCCESS} from "./actions";

const initialState = {
    boardItems: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOARD_SUCCESS:
            return {
                ...state,
                boardItems: action.boardItems,
            };

        default:
            return state;
    }
};

export default reducer;
