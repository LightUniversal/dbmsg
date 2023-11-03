<template>
    <div class="flex justify-between items-center gap-2 bg-green-900 text-white py-4 px-12">
        <div class="name">
            <h1 class=" font-bold text-xl cursor-pointer">
                DBMS - <p class=" text-xs inline-block align-middle relative -top-0.5"> [
                    <fa icon="user-lock" class="" /> PRISON RECORD ]
                </p>
            </h1>
        </div>
        <div class="actions flex gap-9">
            <router-link v-if="!userActive" :to="{ name: 'login' }" class=" flex items-center border p-2 rounded-md border-gray-500  font-semibold text-sm">Login
                <fa icon="fa-sign-in" class=" mx-1" />
            </router-link>
            <router-link v-if="!userActive" :to="{ name: 'register' }" class=" border p-2 rounded-md border-gray-500 font-semibold text-sm flex items-center">Register
                <fa icon="fa-user-plus" class=" mx-1" />
            </router-link>
            <p v-if="userActive" class=" text-xs opacity-90 font-medium text-green-100 tracking-norm relative top-1.5">
                <fa icon="user-plus" /> {{ currentUser }} 
            </p>
        </div>
    </div>
</template>

<script>
import firebase from './firebaseInit'

export default {
    data() {
        return {
            userActive: false,
            currentUser: false
        }
    },
    created() {
        if (firebase.auth.currentUser) {
            this.userActive = true
            this.currentUser = firebase.auth.currentUser.email
            console.log(firebase.auth.currentUser)
            console.log(1,1)
        }
    }
}
</script>

<style lang="scss" scoped></style>