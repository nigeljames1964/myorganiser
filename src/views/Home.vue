<template>
  <div class="home">
    <h2>myOrganiser</h2>
    <h6 id="logout_link" v-if="this.$store.getters.getLoggedStatus" @click="logout">Log Out</h6>
    <Auth v-if="!this.$store.getters.getLoggedStatus" class="col-sm-12"></Auth>
    <div class="menu-links" v-else>
      <router-link to='Appointments'><button class="link-btn"><i class="fas fa-calendar-check"/>Appointments</button></router-link>
      <router-link to='Diary'><button class="link-btn"><i class="fas fa-book"/>Diary</button></router-link>
      <router-link to='Lists'><button class="link-btn"><i class="fas fa-list"/>Lists</button></router-link>
      <router-link to='Notes'><button class="link-btn"><i class="fas fa-book-open"/>Notes</button></router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Auth from "@/components/Auth";
import firebase from "firebase";

export default {
  name: "home",
  data() {
    return {
      showAuth: true
    };
  },
  components: { Auth },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(
          function() {},
          function(error) {
            console.log(error.code);
            console.log(error.message);
          }
        );
      this.$store.commit("setStatus", false);
    }
  }
};
</script>

<style lang="scss" scoped>
/*********MOBILE DEFAULT VIEW******************/
.home {
  h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 20px;
    color: red;
  }

  .menu-links {
    display: flex;
    flex-flow: column;
    align-items: center;

    .link-btn {
      font-size: 2rem;
      text-decoration: none;
      background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
      color: navy;
      padding: 10px;
      border-radius: 10px;
      margin-top: 25px;
      width: 300px;
    }

    .link-btn:hover {
      cursor: pointer;
      color: red;
    }
  }

  .fas {
    margin-right: 15px;
  }

  #logout_link {
    margin-right: 10px;
    text-align: right;
    color: red;
    cursor: pointer;
  }
}
</style>

