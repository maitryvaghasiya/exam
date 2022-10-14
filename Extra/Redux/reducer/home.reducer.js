import * as ActionType from "../ActionType"

let initVal = {
    isLoading: false,
    home: [],
    error: ""
}

export const homeReducer = (state = initVal, action) => {
    console.log("go with reducer", action.type, action.payload);

    switch (action.type) {
        case ActionType.GET_PHOTO:
            return {
                ...state,
                isLoading: false,
                home: action.payload,
                error: ""
            }
        case ActionType.ADD_PHOTO:
            return {
                ...state,
                isLoading: false,
                home: state.home.concat(action.payload),
                error: ""
            }
        default:
            return state
    }
}