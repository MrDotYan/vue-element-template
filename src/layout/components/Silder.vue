<template>
  <div class="el-menu-vertical">
    <el-menu
      :default-active="defaultActive"
      @open="handleOpen"
      background-color="#2c3e50"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      @select="handleSelect"
      :default-openeds="defaultOpeneds"
    >
      <el-submenu
        :index="item.groupKey"
        v-for="item of router"
        :key="item.groupKey"
      >
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{ item.groupTitle }}</span>
        </template>
        <el-menu-item
          :index="sitem.path"
          v-for="sitem of item.children"
          :key="sitem.path"
          v-show="sitem.meta.showSilder"
          >{{ sitem.meta.title }}</el-menu-item
        >
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import routers from "@/router/router";
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      router: routers,
    };
  },
  computed: {
    ...mapState("layoutModules", ["defaultOpeneds", "defaultActive"]),
  },
  mounted() {},
  methods: {
    ...mapMutations("layoutModules", ["setDefaultOpeneds", "setDefaultActive"]),
    handleOpen(key) {
      this.setDefaultOpeneds([key]);
    },
    handleSelect(key) {
      this.$router.push(key).catch((error) => error);
      this.setDefaultActive(key);
    },
  },
};
</script>

<style lang="less" scoped>
.el-menu-vertical {
  height: 100%;
  background: #2c3e50;
}
</style>