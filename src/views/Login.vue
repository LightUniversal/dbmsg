<template>
    <div>
        <form class=" w-80 mx-auto my-9" @submit.prevent.stop="handleSubmit">
            <label for="email" class=" font-semibold">
                <fa icon="fa-envelope" /> -Email
            </label>
            <input type="text" name="email" id="email" placeholder="example@gmail.com" v-model="email"
                class=" w-5/6 block mb-3 h-14 border-2 shadow-inner outline-none font-semibold tracking-cool text-xs border-none py-2 px-5 rounded">
            <label for="password" class=" font-semibold">
                <fa icon="fa-key" /> - Password [ STAFFID ]
            </label>
            <input type="password" placeholder="password" v-model="password"
                class=" w-5/6 shadow-inner  block h-14 border-2 outline-none font-bold tracking-cool text-xs border-none py-2 px-5 rounded border-b-2">
            <button
                class="btn my-3 font-bold inset-3 outline-none shadow-lg rounded block border-2 py-2 px-5 border-none bg-green-900 text-white text-sm"
                @click.stop.prevent="handleSubmit">Login
                <fa icon="fa-sign-in" />
            </button>
        </form>
        <div>
        </div>
    </div>
</template>
  
<script>
import firebase from '../components/firebaseInit';

export default {
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        handleSubmit() {
            firebase.auth.signInWithEmailAndPassword(
                this.email,
                this.password
            ).then(cred => {
                alert("You are logged in as " + cred.user.email)
                this.$router.go({
                    path :  this.$router.path
                });
                location.reload();
            }, (err) => {
                alert(err.message)
            })
        },
       
    }
}
</script>
  
<style lang="scss" scoped></style>