import axios from '../axios-api';

export const FETCH_BOARD_SUCCESS = 'FETCH_BOARD_SUCCESS';
export const CREATE_BOARDITEM_SUCCESS = 'CREATE_BOARDITEM_SUCCESS';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const fetchBoardSuccess = boardItems => ({type: FETCH_BOARD_SUCCESS, boardItems});
export const createBoardItemSuccess = () => ({type: CREATE_BOARDITEM_SUCCESS});
export const toggleModal = () => ({type: TOGGLE_MODAL});


export const fetchBoard = () => {
    return dispatch => {
        axios.get('/board').then(
            response => dispatch(fetchBoardSuccess(response.data))
        )
    };
};

export const createBoardItem = boardItem => {
    return dispatch => {
        return axios.post('/board', boardItem).then(
            () => dispatch(createBoardItemSuccess())
        )
    };
};
