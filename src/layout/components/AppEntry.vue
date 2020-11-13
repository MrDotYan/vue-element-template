<template>
  <div class="main">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: calc(100vh - 62px);
  overflow-x: hidden;
  overflow-y: auto;
}

.fade-enter-active,
.fade-leave-active{
  // 启用硬件加速
  will-change: transform;
  transition: all 300ms;
}
.fade-enter {
  transform: translate(100%, 0);
  transition-timing-function: ease-in;
}
.fade-leave {
  
  transform: translate(-100%, 0);
  transition-timing-function: ease-in;
}
</style>