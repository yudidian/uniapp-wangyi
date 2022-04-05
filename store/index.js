import { createStore } from 'vuex'
import app from "./moudle/app";
import getters from "./getters";
const store = createStore({
    getters,
    modules: {
        app
    }
})
export default store
