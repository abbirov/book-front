<template>
    <form @submit.prevent="auth">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input v-model="form.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input v-model="form.password" type="password" class="form-control" id="exampleInputPassword1">
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "LoginPage",
    data(){
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(['fetchToken']),
        auth(){
            this.fetchToken(this.form)
                .then(() => {
                    this.$router.push('/')
                })
        }
    }

}
</script>

<style scoped>

</style>