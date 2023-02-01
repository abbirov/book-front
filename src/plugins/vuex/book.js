import axios from "@/plugins/vuex/axios";

export default {
    actions: {
        fetchBooks(context, categoryId = null){
            let categoryUrl = ''

            if (categoryId){
                categoryUrl = '?category=' + categoryId
            }
            return new Promise((resolve, reject) => {
                axios.get('http://localhost:2205/api/books/' + categoryUrl)
                    .then((response) => {
                        console.log('Kitoblar olindi')

                        let books = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']
                        }

                        context.commit('updateBooks', books)
                        resolve()
                    })
                    .catch(() => {
                        console.log('Kitoblarni olishda xatolik')
                        reject()
                    })
            })
        }
    },
    mutations: {
        updateBooks(state, books){
            state.books = books
        }
    },
    state: {
        books: {
            models: [],
            totalItems: 0
        }
    },
    getters: {
        getBooks(state){
            return state.books.models
        }
    }
}
