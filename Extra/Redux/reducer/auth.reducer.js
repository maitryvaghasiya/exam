import * as ActionType from '../ActionType'

const initVal = {
    isLoading: false,
    auth: null,
    error: '',
    authMsg: ''
}

export const authUserReducer = (state = initVal, action) => {
    // console.log(action.type, action.payload);
    switch (action.type) {
        case ActionType.SIGN_UP:
            return {
                ...state,
                isLoading: false,
                auth: action.payload.user,
                error: '',
                authMsg: action.payload.authMsg
            }
        case ActionType.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                auth: action.payload.user,
                error: '',
                authMsg: action.payload.authMsg
            }
        case ActionType.LOG_OUT:
            return {
                ...state,
                isLoading: false,
                auth: null,
                error: '',
                authMsg: action.payload.authMsg
            }
        default:
            return state;
    }
}