<template>
  <div class="window">
    <header class="toolbar toolbar-header">
      <!--<h1 class="title">Header</h1>-->
      <div class="toolbar-actions">
        <div class="btn-group">
          <button class="btn btn-default">
            <span class="icon icon-home"></span>
          </button>
          <button class="btn btn-default">
            <span class="icon icon-folder"></span>
          </button>
          <button class="btn btn-default active">
            <span class="icon icon-cloud"></span>
          </button>
          <button class="btn btn-default">
            <span class="icon icon-popup"></span>
          </button>
          <button class="btn btn-default">
            <span class="icon icon-shuffle"></span>
          </button>
        </div>

        <button class="btn btn-default">
          <span class="icon icon-home icon-text"></span>
          Filters
        </button>

        <button class="btn btn-default btn-dropdown pull-right">
          <span class="icon icon-megaphone"></span>
        </button>
      </div>

    </header>
    <div class="window-content">
      <div class="pane-group">
        <div class="pane-sm sidebar"><toolbar></toolbar></div>
        <div class="pane"><listing></listing></div>
        <div class="pane">...</div>
      </div>
    </div>
    <footer class="toolbar toolbar-footer">
      <h1 class="title">Footer</h1>
    </footer>
  </div>

  <!--<div id="main_container">
    <button class="btn btn-warning">Warning</button>
    <el-row :gutter="10" id="menu_container">
      <el-col :xs="3" :sm="3" :md="3" :lg="3">Logo</el-col>
      <el-col :xs="3" :sm="3" :md="3" :lg="3" :offset="16">test</el-col>
    </el-row>
    <el-row :gutter="10" id="app_container">
      <el-col :xs="5" :sm="5" :md="5" :lg="5" id="toolbar_container"><toolbar></toolbar></el-col>
      <el-col :xs="9" :sm="9" :md="9" :lg="9"><listing class="grid-content"></listing></el-col>
      <el-col :xs="10" :sm="10" :md="10" :lg="10"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>-->
</template>

<style lang="scss">


html, #app {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  border: 0;
  height: 100%;
  max-height: 100%;
  position: relative;
}

#main_container {
  height: inherit;
}

#menu_container {
  height: 8%;
}

#app_container{
  height: 92%;
}

#toolbar_container {
  height: 100%;
  text-align: left;
}

</style>

<script>
  import CurrentPage from './AppView/CurrentPage'
  import Links from './AppView/Links'
  import Versions from './AppView/Versions'
  import Listing from './AppView/Listing'
  import Toolbar from './AppView/Toolbar'

  export default {
    components: {
      CurrentPage,
      Links,
      Versions,
      Listing,
      Toolbar
    },
    name: 'home-page'
  }
</script>

<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>
