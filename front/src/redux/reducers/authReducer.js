import { AUTHORIZATION, AUTHORIZATION_ERROR, LOGOUT } from '../actions/authAction';

const initialState = {
    nickname: '',
    token: '',
    next: 'START'
};

export default function (state = initialState, action) {
    switch (action.type) {
        case AUTHORIZATION:
            return {
                nickname: action.nickname,
                token: action.token,
                next: 'REDIRECT'
            };
        case AUTHORIZATION_ERROR:
            return {
                nickname: '',
                token: '',
                next: 'ERROR'
            };
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}