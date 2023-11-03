<template>
    <div class="relative">
        <div class="nav  w-full relative left-10 my-4 cases">
            <button @click="viewcase"><fa icon="fa-user-lock" /> View Cases</button>
            <button @click="addCase"><fa icon="fa-plus" /> Add Case</button>
        </div>
        <div class="logout block bg-white z-10 absolute right-3 -top-1">
     <button v-if="userActive" class="text-sm font-bold shadow-sm py-2 px-4" @click="logout">Logout <fa icon="sign-out" class="mx-1"/></button>
        </div>
        <div class="body">
            <div class="staff">
                <table class="content-table border-collapse my-6 w-4/5 mx-auto">
                    <thead>
                        <tr class=" rounded bg-green-50 shadow-sm text-green-900 text-left font-bold">
                            <th>S/N</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th class="text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="body">
                        <tr v-for="staff in staffs" v-bind:key="staff.name">
                            <td>1</td>
                            <td>{{ staff.name  }}</td>
                            <td>{{ staff.status  }}</td>
                            <td class="text-right"><button v-if="staff.status == 'Admin'" class=" bg-red-400 px-3 py-1 text-xs rounded text-white"><fa icon="fa-gavel" /> {{ staff.assign }} case</button></td>
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
console.log()
export default {
    data() {
        return {
            staffs : [],
            userActive : false,
            currentUser : false,
        }
    },
    created() {
        if(firebase.auth.currentUser) {
            this.userActive = true
            this.currentUser = firebase.auth.currentUser.email
            console.log(firebase.auth.currentUser.email)
        }
        firebase.db.collection("staff")
        .orderBy("name")
        .get()
        .then(querySnapshot => {

            querySnapshot.forEach((doc) => {
                const data = {
                    name : doc.data().name,
                    status : doc.data().status,
                    assign : doc.data().status == "Admin" ? "assign" : "..."
                };
                console.log(data)
                this.staffs.push(data)
            })
        })
    },
    methods : {
        logout() {
            firebase.auth.signOut().then(() => {
                this.$router.go({
                    path :  this.$router.path
                })
            })
        },
        addCase() {
            console.log("Case added...")
            this.$router.push('/addCase')
        },
        viewcase() {
            console.log("Case added...")
            this.$router.push('/crimes')
        }
    }
}
</script>

<style lang="scss" scoped></style>