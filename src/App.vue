<template>
  <div id="app" ref="app">
    <router-view />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "app",
  provide() {
    return {
      reload: this.reload
    };
  },
  created() {
    
  },
  computed: {},
  mounted() {},
  data() {
    return {};
  },
  methods: {
    
  },
  watch: {
    
  }
};
</script>
<style lang="less">
</style>
