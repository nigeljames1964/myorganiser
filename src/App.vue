<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: black;
  color: white;
}

.page-header {
  color: white;
  text-shadow: 2px solid red;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.fa-home {
  color: red;
  margin: 5px 10px;
  font-size: 1.8rem;
  cursor: pointer;
}

.new-heading {
  color: red;
  margin-bottom: 20px;
  margin-top: 15px;
}
</style>
