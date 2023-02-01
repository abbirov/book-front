<template>
    <!-- category boshlandi -->
    <div class="col-12 col-md-2 mt-5">
        <div class="list-group">
            <router-link
                v-for="category of getCategories" :key="category.id"
                :to="'/categories/' + category.id"
                class="list-group-item list-group-item-action" exact-active-class="active"
            >
                {{category.name}}
            </router-link>
        </div>
    </div>
    <!-- category tugadi -->
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "CategoryCol",
    computed: {
        ...mapGetters(['getCategories'])
    },
    methods: {
        ...mapActions(['fetchCategories'])
    },
    mounted() {
        this.fetchCategories()
    }
}
</script>

<style scoped>

</style>