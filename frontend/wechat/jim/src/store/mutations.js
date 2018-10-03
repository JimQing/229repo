import {
    USER_INFO
} from './mutation-types.js';

export default {
    [USER_INFO] (state, v) {
        state.userInfo = v;
    }
}