<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  // 在整个运用程序结束的时候，摧毁所有缓存数据
  methods: {
    ...mapActions("appModules", ["destroyedSessionStorage","destroyedLocalStorage"]),
  },
  destroyed() {
    // 清空sessionStorage
    this.destroyedSessionStorage();
    // 清空localStorage
    this.destroyedLocalStorage();
  },
};
</script>

<style lang="less">
@import url("./App.less");
#app {
  color: @color-font-gray-blue;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
</style>
