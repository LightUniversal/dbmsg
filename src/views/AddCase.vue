<template>
    <div class="pl-14 mt-6 -mb-4 shadow-xl pb-0 flex justify-between w-full">
        <h2 class=" font-bold text-green-900">
            <fa icon="user" /> Complainant Details
        </h2>
<<<<<<< HEAD
        <div class="nav  relative right-10 -top-4 my-4 cases">
=======
        <div class="nav  relative right-2 -top-5 my-4 cases">
>>>>>>> 0cbcc31 (made new changes)
            <button @click="viewcase"><fa icon="fa-user-lock" /> View Cases</button>
            <button @click="home"><fa icon="fa-plus" /> Add Case</button>
        </div>
    </div>
    <form @submit.prevent.stop="saveData">
        <div class=" grid grid-cols-2 mx-auto w-4/5 gap-4 py-10 complainant">
            <div>
                <label for="complainant">Name of Complainant</label>
                <input type="text" placeholder="put you name" v-model="complainant" ref="pass"
                    class=" w-full shadow-inner  block h-12 border-2  text-green-900 outline-none font-bold tracking-cool text-xs border-1 py-2 px-5 rounded border-b-2">
            </div>
            <div>
                <label for="tel">Telephone Number
                    <fa icon="phone" class="mx-1" />
                </label>
                <input type="number" placeholder="put your phone number" v-model="pnumber" ref="pass"
                    class=" w-full shadow-inner  block h-12 border-2  text-green-900 outline-none font-bold tracking-cool text-xs border-1 py-2 px-5 rounded border-b-2">
            </div>
            <div>
                <label for="work">Occupation</label>
                <input type="text" placeholder="What is your occupation" v-model="occupation" ref="pass"
                    class=" w-full shadow-inner  block h-12 border-2  text-green-900 outline-none font-bold tracking-cool text-xs border-1 py-2 px-5 rounded border-b-2">
            </div>
            <div>
                <label for="age">Age</label>
                <input type="number" placeholder="" v-model="age" ref="pass"
                    class=" w-full shadow-inner  block h-12 border-2  text-green-900 outline-none font-bold tracking-cool text-xs border-1 py-2 px-5 rounded border-b-2">
            </div>
            <div>
                <label for="town">Home Town</label>
                <input type="text" placeholder="Your home town" v-model="town" ref="pass"
                    class=" w-full shadow-inner  block h-12 border-2  text-green-900 outline-none font-bold tracking-cool text-xs border-1 py-2 px-5 rounded border-b-2">
            </div>
            <div class=" font-bold w-36">
                <label for="gender">Gender</label>
                <select name="gender" v-model="gender" id="gender"
                    class=" w-full shadow-inner  block h-12 border-2  text-green-900 outline-none  font-bold tracking-cool text-xs border-1 py-2 px-5 rounded border-b-2">
                    <option value="Male" class=" font-bold">Male</option>
                    <option value="Female" class=" font-bold">Female</option>
                </select>
            </div>
            <div>
                <label for="soo">State of Orign</label>
                <input type="text" placeholder="Your state of origin" v-model="soo" ref="pass"
                    class=" w-full shadow-inner  block h-12 border-2  text-green-900 outline-none font-bold tracking-cool text-xs border-1 py-2 px-5 rounded border-b-2">
            </div>
            <div class=" font-bold w-36">
                <label for="crime">Type of Crime</label>
                <select name="crime" v-model="crime" id="crime"
                    class=" w-full shadow-inner  block h-12 border-2  text-green-900 outline-none  font-bold tracking-cool text-xs border-1 py-2 px-5 rounded border-b-2">
                    <option value="Assualt" class=" font-bold">Assualt</option>
                    <option value="Robbery" class=" font-bold">Robbery</option>
                    <option value="Exam malpractice" class=" font-bold">Exam Maplractice</option>
                    <option value="Murder" class=" font-bold">Murder</option>
                    <option value="Rigging" class=" font-bold">Rigging</option>
                    <option value="Rape" class=" font-bold">Rape</option>
                </select>
            </div>
            <div>
                <label for="local">Local Govt...</label>
                <input type="text" placeholder="put your local government area" v-model="log" ref="pass"
                    class=" w-full shadow-inner  block h-12 border-2  text-green-900 outline-none font-bold tracking-cool text-xs border-1 py-2 px-5 rounded border-b-2">
            </div>
            <div>
                <label for="local">Date</label>
                <input type="date" v-model="dob" ref="pass"
                    class=" w-full shadow-inner  block h-12 border-2  text-green-900 outline-none font-bold tracking-cool text-xs border-1 py-2 px-5 rounded border-b-2">
            </div>
        </div>
        <button type="submit" @click.prevent.stop="saveData"
                class=" h-16 -mt-4 mx-auto block mb-2 bg-green-800 text-white outline-none font-bold tracking-cool text-xs border-1 py-1 px-20 rounded border-b-2">
                Save and Continue </button>
    </form>
</template>

<script>
import firebase from '../components/firebaseInit';
export default {
    data() {
        return {
<<<<<<< HEAD
            gender: "Male",
            crime: "Assualt",
            complainant: "........",
            occupation: ".........",
            town: "...........",
            soo: "Your state of Orign",
            log: "Your local government",
            age: "",
            pnumber: "put Your phone number",
=======
            gender: "",
            crime: "",
            complainant: "",
            occupation: "",
            town: "",
            soo: "",
            log: "",
            age: "",
            pnumber: "",
>>>>>>> 0cbcc31 (made new changes)
            // dob : 
        }

    },
    methods: {
        saveData() {
            firebase.db.collection('inmates').add({
                gender : this.gender,
                crime : this.crime,
                complainant : this.complainant,
                Age : this.age,
                State_Of_Origin : this.soo,
                Tel : this.pnumber,
                town : this.town,
                local_govt : this.log,
                occupation : this.occupation
            }).then(()=> {
                alert("Complaint will be looked into shortly")
                this.$router.push("/crimes")
            })
            
        },
        viewcase() {
            this.$router.push("/crimes")
        },
        home() {
            this.$router.push("/")
        }
    },
}
</script>

<style lang="scss" scoped></style>