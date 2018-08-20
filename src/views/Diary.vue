<template>
<div>
  <router-link to="/"><i class="fas fa-home"></i></router-link>
  <h1 class="page-header">Diary</h1>
</div>

</template>
<script>
export default {
  name: "diary",
  data() {
    return {};
  },
  methods: {},
  beforeMount() {
    if (!this.$store.getters.getLoggedStatus) {
      this.router.push("/");
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
