import {CREATE_BOARDITEM_SUCCESS, FETCH_BOARD_SUCCESS, TOGGLE_MODAL} from "./actions";

const initialState = {
    boardItems: [],
    showModal: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOARD_SUCCESS:
            return {
                ...state,
                boardItems: action.boardItems,
            };

        case TOGGLE_MODAL:
            return {
                ...state,
                showModal: !state.showModal
            };

        case CREATE_BOARDITEM_SUCCESS:
            return {
                ...state,
                showModal: false,
            };

        default:
            return state;
    }
};

export default reducer;
