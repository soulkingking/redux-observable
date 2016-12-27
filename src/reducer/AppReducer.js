/**
 * Created by CAOBIN on 2016/12/27.
 */
    import {PING, PONG} from "../action/AppAction";
export const pingReducer = (state = { isPinging: false }, action) => {
    switch (action.type) {
        case PING:
            return { isPinging: true };

        case PONG:
            return { isPinging: false };

        default:
            return state;
    }
};
