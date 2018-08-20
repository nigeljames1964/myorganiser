<template>
<div>
  <router-link to="/"><i class="fas fa-home"></i></router-link>
  <h1 class="page-header">Notes</h1>
  <div><button id="newBtn" @click="add = !add"><i class="fas fa-plus"></i></button></div>

  <div id="createNewNote" v-if="add === true">
    <h5 class="new-heading">Enter new note</h5>
    <form action="" class="form-group col-md-12">
      <label for="name">Note text</label>
      <input type="text" name="name" class="form-control mb-2" v-model="note.title">

      <div id="btn-div" class="col-sm-12">
        <button class="btn btn-primary col-sm-6 mt-2" @click.prevent="save_note">Save</button>
        <button class="btn btn-cancel col-sm-6 mt-2" @click.prevent="cancel_add_note">Cancel</button>
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
  name: "notes",
  data() {
    return {};
  },
  methods: {
    save_note() {},
    cancel_note() {}
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
