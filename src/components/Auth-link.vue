<template>
<div id='login'>
    <h6 @click="auth()">log in/register</h6>
</div>

</template>
<script>
export default {
  name: "auth",
  data() {
    return {};
  },
  methods: {
    auth() {
      console.log("auth");
    }
  }
};
</script>
<style lang="scss" scoped>
#login {
  display: flex;
  justify-content: flex-end;
  margin-right: 5px;

  h6:hover {
    cursor: pointer;
    color: red;
  }
}
</style>


