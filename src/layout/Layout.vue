<template>
  <div class="layout">
    <el-container class="layout">
      <el-header>
        <Header />
      </el-header>
      <el-container class="container">
        <el-aside>
          <Silder />
        </el-aside>
        <el-main class="overflow-hidden"> <AppEntry /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 使用vuex
// import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

import Header from "./components/Header";
import Silder from "./components/Silder";
import AppEntry from "./components/AppEntry";

export default {
  components: {
    Header,
    Silder,
    AppEntry,
  },
  data() {
    // TODO:
    return {};
  },
  computed: {
    // 使用state
    // mapState里面有两个参数
    // 模块名称和你需要的状态列表
    // ...mapState("layoutModules", ["tabs"]),
  },
  mounted() {
    // 直接访问的方式
    // console.log(this.$store.state.layoutModules);
    // mapState
    // console.log(this.tabs);
    // mapActions
    // this.getTest("dgfgdjf").then((res) => {
    //   console.log(res);
    // });
    // mapGetters
    // console.log(this.getTabs());
    // mpaMutations
    // console.log(this.TEST("pppppppppppp"));
  },
  methods: {
    // 和mapState一样
    // ...mapActions("layoutModules", ["getTest"]),
    // ...mapGetters("layoutModules", ["getTabs"]),
    // ...mapMutations("layoutModules", ["TEST"]),
  },
};
</script>

<style lang="less" scoped>
.layout {
  width: 100%;
  height: 100%;
  .overflow-hidden {
    overflow: hidden;
  }
  .container {
    margin-top: 2px;
  }
}
</style>