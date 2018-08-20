<template>
<div>
  <router-link to="/"><i class="fas fa-home"></i></router-link>
  <h1 class="page-header">Lists</h1>
  <div><button id="newBtn" @click="add = !add"><i class="fas fa-plus"></i></button></div>

  <div id="createNewListItem" v-if="add === true">
    <h5 class="new-heading">Enter new list title</h5>
    <form action="" class="form-group col-md-12">
      <label for="name">Title for list</label>
      <input type="text" name="name" class="form-control mb-2" v-model="list.title">
      <label for="app_date">Add List item to {{ list.title }}</label>
      <input type="date" name="app_date" class="form-control mb-2" v-model="list.item">
      <div id="btn-div" class="col-sm-12">
        <button class="btn btn-primary col-sm-6 mt-2" @click.prevent="save_list">Save</button>
        <button class="btn btn-cancel col-sm-6 mt-2" @click.prevent="cancel_add_list">Cancel</button>
      </div>
    </form>
  </div>

  <div class="list-list">
    <ul>
      <li v-for="(list, index) in this.$store.getters.getLists" :key="list.title">
        <div class="appointment-listitem">
          <h4 @click="viewList(index)">{{ list.title }}</h4>
          <button @click="remove_list(index)">X</button>
        </div>
      </li>
    </ul>
  </div>

</div>
</template>
<script>
export default {
  name: "lists",
  data() {
    return {
      list: {
        title: "",
        item: ""
      }
    };
  },
  methods: {
    save_list() {
      console.log("saving appointment");
      if (this.list.title != "") {
        this.$store.commit("addList", this.list);
        this.$router.push("/Lists");
      }
    },
    cancel_add_appointment() {
      this.$router.push("/");
    }
  },
  beforeMount() {
    if (!this.$store.getters.getLoggedStatus) {
      this.router.push("/");
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
