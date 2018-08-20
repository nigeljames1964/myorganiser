<template>
  <div id="container">

      <h6 style="margin-bottom:10px; color:red; font-weight:bold;">Please log in or register to continue</h6> <!-- add pulse animation -->
      <div id="login" class="mt-3">
        <h5>Login</h5>
        <div id="login"></div>
        <div id="form_login">
          <input type="email" id="login_email" placeholder="email" class="mb-2" v-model="login_email" autofocus>
          <input type="password" id="login_password" placeholder="password" v-model="login_password">
          <h6 class="errorMsg" v-if="login_error">{{ login_error }}</h6>
          <button id="login_btn" class="btn btn-primary mt-2 mb-2" @click="login">Log In</button>
        </div>
      </div>
      <div id="register" class="mt-3">
        <h5>Register</h5>
        <div id="form_register">
          <input type="email" id="register_email" placeholder="email" class="mb-2" v-model="email">
          <input type="password" id="register_password" placeholder="password" v-model="password">
          <h6 class="errorMsg" v-if="register_error">{{ register_error }}</h6>
          <button id="register_btn" class="btn btn-success mt-2 mb-2" @click="register">Register</button>
        </div>
      </div>


  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "auth",
  data() {
    return {
      login_email: "",
      login_password: "",
      email: "",
      password: "",
      login_error: "",
      register_error: ""
    };
  },
  methods: {
    validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    login() {
      this.login_error = "";
      if (this.login_email === "" || this.login_password === "") {
        this.login_error = "email and password required";
      } else {
        if (!this.validateEmail(this.login_email)) {
          this.login_error = "badly formed email";
        } else {
          firebase
            .auth()
            .signInWithEmailAndPassword(this.login_email, this.login_password)
            .then(() => {
              var user = firebase.auth().currentUser;
              localStorage.setItem("myorganiser_userId", user.uid);
              this.$store.commit("setStatus", true);
              this.$router.push("/");
            });
        }
      }
    },
    register() {
      this.register_error = "";
      if (this.email === "" || this.password === "") {
        this.register_error = "email and password required";
        return;
      } else {
        if (!this.validateEmail(this.email)) {
          this.register_error = "badly formed email";
          return;
        } else {
          firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then(() => {
              console.log("Account Created");
              this.$store.commit("setStatus", true);
              this.$router.push("/");
            });
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#container {
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: cadetblue;
  background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
  padding: 5px;
  text-align: center;
  width: 90%;
  margin: auto;
  border-radius: 5px;

  h5 {
    color: black;
    font-weight: bold;
  }
}

#form_register,
#form_login {
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;

  .btn {
    width: 100%;
    border-radius: 7px;
  }

  .errorMsg {
    color: black;
    font-weight: bold;
    font-size: 0.8rem;
  }

  input {
    width: 100%;
    border-radius: 10px;
    height: 3rem;
    font-weight: bold;
    padding: 8px;
    background-color: rgba(100, 120, 270, 0.7);
    color: white;
  }
}
</style>


