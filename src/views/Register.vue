<template>
  <div>
    <form
      class="max-w-2xl mx-auto my-9 px-10 register"
      @submit.prevent.stop="handleSubmit"
    >
      <div class="admin flex justify-between gap-3">
        <div class="logo">
          <fa
            icon="user-plus"
            class="text-2xl p-2 shadow-2xl border border-gray-200 align-middle"
          />
        </div>
        <h1
          class="relative -top-2 font-bold text-lg bg-green-0 text-green-900 py-4 px-4 rounded shadow-sm"
        >
          Register as Admin in GROUP 5 - DBMS
          <p
            class="text-xs inline-block align-middle relative -top-0.5 font-semibold"
          >
            [ <fa icon="user-lock" class="" /> PRISON RECORD ]
          </p>
        </h1>
      </div>
      <label for="name" class="text-sm font-bold text-green-900 align-middle"
        >Name
        <fa icon="user" />
      </label>
      <br />
      <input
        type="text"
        name="yname"
        id="yname"
        placeholder="Enter your name"
        v-model="yname"
        class="w-5/6 block mb-3 h-14 border-2 text-green-900 shadow-inner outline-none font-semibold tracking-cool text-xs border-none py-2 px-5 rounded"
      />
      <br />
      <label for="email" class="text-sm font-bold text-green-900 align-middle"
        >Email
        <fa icon="envelope" />
      </label>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Enter your email"
        v-model="email"
        class="w-5/6 block mb-3 h-14 text-green-900 border-2 shadow-inner outline-none font-semibold tracking-cool text-xs border-none py-2 px-5 rounded"
      />
      <br />
      <label for="password" class="text-green-900 font-bold tracking-norm"
        >Password <fa icon="key" /> [ StaffID ]
      </label>
      <div class="genpass flex gap-1 relative">
        <input
          type="password"
          placeholder="put your password"
          v-model="password"
          ref="pass"
          class="w-5/6 shadow-inner block h-14 border-2 text-green-900 outline-none font-bold tracking-cool text-xs border-none py-2 px-5 rounded border-b-2"
        />
        <fa
          :icon="eyeIcons[0]"
          class="eye relative cursor-pointer -left-10 top-3 p-2 text-green-900 shadow-2xl active:text-lg transition-all"
          @click="viewPassword"
        />
        <fa
          :icon="eyeIcons[1]"
          class="relative cursor-pointer eyeslash -left-10 top-3 p-2 hidden text-green-900 shadow-2xl active:text-lg transition-all"
          @click="viewPassword"
        />
        <button @click.prevent="generatePassword">
          <fa
            icon="fingerprint"
            class="shadow-2xl p-2 rounded-2xl h-6 text-green-900 relative top-1"
          />
        </button>
      </div>
      <br />
      <label for="cpassword" class="text-green-900 font-bold"
        >Comfirm Password
        <fa icon="check" />
      </label>
      <input
        type="password"
        placeholder="comfirm your password"
        v-model="cpassword"
        ref="cref"
        @keyup="cnPassword"
        class="w-5/6 shadow-inner block h-14 border-2 outline-none text-green-900 font-bold tracking-cool text-xs border-none py-2 px-5 rounded border-b-2"
      />
      <button
        class="btn my-3 font-bold inset-3 outline-none shadow-2xl rounded-full p-1 block border-2 py-2 px-5 border-none bg-green-900 text-white text-sm relative"
        @click.prevent.stop="handleSubmit"
      >
        Register
        <fa icon="user" class="ml-2 shadow-2xl p-1 rounded-full align-middle" />
      </button>
    </form>
    <div></div>
  </div>
</template>

<script>
import firebase from "../components/firebaseInit";

export default {
  data() {
    return {
      name: "Online Shopping",
      yname: "",
      email: "",
      password: "",
      cpassword: "",
      generatedPassword: null,
      seePassword: false,
      eyeIcons: ["eye", "eye-slash"],
      status: ["Admin", "Attendant", "Receptionist", "Cleaner", "Supervisor"],
      indicator: null,
    };
  },
  methods: {
    handleSubmit() {
      if (
        this.password == this.cpassword &&
        this.yname.length >= 2 &&
        this.email.length >= 4 &&
        this.password.length >= 4
      ) {
        console.log("submit");
        console.log(firebase);
        firebase.auth
          .createUserWithEmailAndPassword(this.email, this.cpassword)
          .then(
            (cred) => {
              alert("Account created for " + cred.user.email);
              setTimeout(() => {
                location.reload();
              }, 2000);
              return firebase.db.collection("staff").doc(cred.user.uid).set({
                name: this.yname,
                status: this.status[this.indicator],
                // id : cred.user.uid
              });
            },
            (err) => {
              alert(err.message);
            }
          )
          .then(() => {
            this.$router.go({
              path: this.$router.path,
            });
            console.log("User Added to the database...");
          });
      } else {
        console.log("Please fill all inputs correctly...");
      }
    },
    generatePassword() {
      this.password =
        this.yname.substring(0) +
        "$" +
        this.yname.substring(1, 1) +
        this.generatedPassword +
        "#";
      this.password =
        this.yname.substring(0, 2) +
        "#" +
        this.yname.substring(2, 1) +
        Math.floor(Math.random() * 1000000) +
        "$";
      console.log(this.password);
    },
    viewPassword() {
      this.seePassword = !this.seePassword;
      if (this.seePassword) {
        this.$refs.pass.type = "text";
        this.$el.querySelector(".eye").style.display = "none";
        this.$el.querySelector(".eyeslash").style.display = "inline-block";
      } else {
        this.$refs.pass.type = "password";
        this.$el.querySelector(".eye").style.display = "inline-block";
        this.$el.querySelector(".eyeslash").style.display = "none";
      }
    },
    cnPassword() {
      if (this.password !== this.cpassword) {
        console.log("error");
      }
      if (this.password === this.cpassword) {
        console.log("passed");
      }
    },
  },
  mounted() {
    this.indicator = Math.floor(Math.random() * Number(this.status.length));
    console.log(this.status[this.indicator]);
    this.generatedPassword = Math.floor(Math.random() * 100000);
    this.cpassword = null;
    this.password = null;
    console.log(firebase);
  },
};
</script>

<style lang="scss" scoped></style>
