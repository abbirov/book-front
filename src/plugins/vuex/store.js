import {createStore} from "vuex";
import user from "@/plugins/vuex/user";
import book from "@/plugins/vuex/book";
export default createStore({
    modules: {
        user, book
    }
})