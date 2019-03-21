import axios from '../axios-api';

export const FETCH_BOARD_SUCCESS = 'FETCH_BOARD_SUCCESS';
export const CREATE_BOARDITEM_SUCCESS = 'CREATE_BOARDITEM_SUCCESS';

export const fetchBoardSuccess = boardItems => ({type: FETCH_BOARD_SUCCESS, boardItems});
export const createBoardItemSuccess = () => ({type: CREATE_BOARDITEM_SUCCESS});

export const fetchBoard = () => {
    return dispatch => {
        axios.get('/board').then(
            response => dispatch(fetchBoardSuccess(response.data))
        )
    };
};

export const createBoardItem = boardItem => {
    return dispatch => {
        axios.post('/board', boardItem).then(
            () => dispatch(createBoardItemSuccess())
        )
    };
};
