import { tokenUrl, registrationUrl } from 'constants/URLs';

export const AUTHORIZATION = 'AUTHORIZATION';
export const AUTHORIZATION_ERROR = 'AUTHORIZATION_ERROR';
export const LOGOUT = 'LOGOUT';
export const REGISTRATION = 'REGISTRATION';

function authFinish(nickname, token) {
    return { type: AUTHORIZATION, nickname, token }
}

function authError() {
    return { type: AUTHORIZATION_ERROR }
}

export function auth(login, password) {
    return sendRequest(tokenUrl, login, password);
}

export function logout() {
    return { type: LOGOUT }
}

export function registration(login, password) {
    return sendRequest(registrationUrl, login, password);
}

function sendRequest(url, login, password) {
    let user = {
        nickname: login,
        password: password
    }
    return (dispatch) => {
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(json => dispatch(authFinish(login, json.token)))
            .catch(() => dispatch(authError()));
    }
}