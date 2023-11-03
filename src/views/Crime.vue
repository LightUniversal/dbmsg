<template>
    <div class="relative">
        <div class="nav  w-full relative left-10 my-4 cases">
            <button @click="Addcases"><fa icon="fa-plus" /> Add Case</button>
            <button @click="viewstaff"><fa icon="fa-user-plus" /> View Staff</button>
        </div>
        <div class="logout inline absolute right-14 -top-1">
            <button v-if="userActive" class="text-sm font-bold shadow-sm py-2 px-4" @click="logout">Logout <fa icon="sign-out" class="mx-1"/></button>
        </div>
        <div class="body">
            <div class="staff">
                <table class="content-table border-collapse my-6 w-11/12 mx-auto">
                    <thead>
                        <tr class=" bg-gray-100 shadow-sm text-green-900 rounded-sm text-left font-bold">
                            <th>S/N</th>
                            <th>Crime</th>
                            <th>Prisoner's Name</th>
                            <th>State of Orign</th>
                            <th>Local Government</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>occupation</th>
                            <th>Tel:</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody class="body">
                        <tr v-for="(act, index) in acts" :key="act.age">
                            <td>{{ index }}</td>
                            <td>{{ act.crime }}</td>
                            <td>{{ act.complainant }}</td>
                            <td>{{ act.soo }}</td>
                            <td>{{ act.log }}</td>
                            <td>{{ act.age }}</td>
                            <td>{{ act.gender }}</td>
                            <td>{{ act.occupation }}</td>
                            <td>{{ act.tel }}</td>
                            <td class="flex justify-between gap-3 " >
                                <button class="text-xs  text-blue-900 shadow-lg py-2 px-4 rounded"><fa icon="fa-pencil" /></button>
                                <button class="text-xs rounded text-red-900 shadow-xl py-2 px-2"><fa icon="fa-trash" /></button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>


<script>
// import faker from "@faker-js/faker"
import firebase from '../components/firebaseInit'

console.log("111")
export default {
    data() {
        return {
            sn : 1,
            acts: [],
            userActive: false,
            currentUser: false,
        }
    },
    created() {
        if (firebase.auth.currentUser) {
            this.userActive = true
            this.currentUser = firebase.auth.currentUser.email
            console.log(firebase.auth.currentUser.email)
        }
        firebase.db.collection("inmates")
            .orderBy("Age")
            .get()
            .then(querySnapshot => {

                querySnapshot.forEach((doc) => {
                    const data = {
                        age: doc.data().Age,
                        soo: doc.data().State_Of_Origin,
                        tel: doc.data().Tel,
                        complainant: doc.data().complainant,
                        gender: doc.data().gender,
                        occupation: doc.data().occupation,
                        log: doc.data().local_govt,
                        town: doc.data().town,
                        crime: doc.data().crime,
                    };
                    console.log(data)
                    this.acts.push(data)
                })
            })
    },
    methods: {
        viewstaff() {
            this.$router.push('/')
        },
        Addcases() {
            this.$router.push('/addCase')
        },
        logout() {
            firebase.auth.signOut().then(() => {
                this.$router.go({
                    path :  this.$router.path
                })
            })
        }
    }
}
</script>

<style lang="scss" scoped></style>