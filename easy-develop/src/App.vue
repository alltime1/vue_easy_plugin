<template>
  <div id="app">
    <input v-canonical:float="9" v-model="inputNum" type="text" />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "",
      inputNum: 12,
    };
  },
  methods: {
    showTost(bool) {
      console.log(bool);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
