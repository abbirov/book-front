<template>
    <!-- header qatori boshlandi -->
    <div class="row">
        <div class="col">
            <header>
                <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                    <div class="container-fluid">
                        <router-link class="navbar-brand" to="/">Kitoblar</router-link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <router-link class="nav-link btn btn-primary text-light" to="/login">Login</router-link>

                    </div>
                </nav>
            </header>
        </div>
    </div>
    <!-- header qatori tugadi -->
</template>

<script>
export default {
    name: "HeaderRow"
}
</script>

<style scoped>

</style>