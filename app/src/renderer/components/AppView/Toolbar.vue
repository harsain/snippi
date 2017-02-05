<template>
  <div id="toolbar">
    <el-menu default-active="1" class="el-menu-vertical-demo" theme="dark">
      <el-menu-item index="1">
        <el-button type="text" icon="document">All</el-button>
      </el-menu-item>
      <el-menu-item index="2">
        <el-button type="text" icon="plus">New</el-button>
      </el-menu-item>
      <el-menu-item index="3">
        <el-button type="text" icon="star-off">Favorite</el-button>
      </el-menu-item>
      <el-menu-item index="4">
        <el-button type="text" icon="minus">Delete</el-button>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss">
#toolbar {
  float: left;
  width: 100%;
  height: 100%;
  background-color: #30414D;
  color: #767676;
  /*padding: 35px 25px 25px 25px;*/
}
</style>

<script>

  export default {

  }

</script>
