import { authActions } from "./actions";

const initialState = {
    token: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case authActions.STORE_TOKEN:
            return { ...state, token: action.token };
    }
    return state;
}

export default authReducer;