<template>
    <!-- kitoblar qatori boshlandi -->
    <div class="row">
        <h2>{{bookTitle}}</h2>

        <!-- kitob boshlandi -->
        <div  v-for="book of getBooks" :key="book.id"
            class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
            <div class="card">
                <img src="#" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{book.name}}</h5>
                    <p class="card-text">{{book.description}}</p>
                    <router-link to="/read-book" class="btn btn-primary">O'qish</router-link>
                </div>
            </div>
        </div>
        <!-- kitob tugadi -->

    </div>
    <!-- kitoblar qatori tugadi -->
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "BooksRow",
    computed: {
        ...mapGetters(['getBooks', "getCategories"]),
        bookTitle(){
            return 'Kitoblar'
        }
    },
    methods: {
        ...mapActions(['fetchBooks', 'fetchCategories'])
    },
    mounted() {
        this.fetchBooks(this.$route.params.id)
        this.fetchCategories()
    },
    watch: {
        '$route.params.id'() {
            this.fetchBooks(this.$route.params.id)
        }
    }
}
</script>

<style scoped>

</style>