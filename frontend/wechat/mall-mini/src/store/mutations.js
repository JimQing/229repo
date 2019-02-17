import {
    USER_INFO,
    USER_STATES,
    TIPS,
    SET_COOKIES
} from './mutation-types.js';

export default {
    [USER_INFO] (state, v) {
        state.userInfo = v;
    },
    [USER_STATES] (state, v) {
        state.isLogin = v
    },
    [TIPS] (state, v) {
        state.isShowWindow = v;
    },
    [SET_COOKIES] (state, v) {
        state.cookie = v;
    }
}