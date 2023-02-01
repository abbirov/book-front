<template>
    <h2>{{getBook.name}}</h2>

    <div>{{getBook.text}}</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "ReadBookPage",
    computed: {
        ...mapGetters(['getBook'])
    },
    methods: {
        ...mapActions(['fetchBook'])
    },
    mounted() {
        this.fetchBook(this.$route.params.bookId)
    }
}
</script>

<style scoped>

</style>