<template>
  <div>
    <div v-for="snippet in snippets" class="text item">

      <div v-on:click="updateActiveSnippet(snippet)">
        <el-card class="box-card">
          {{'ID ' + snippet.id }}
          {{'Description ' + snippet.description }}
        </el-card>
      </div>
    </div>
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    computed: mapGetters({
      snippets: 'allSnippets',
      activeSnippet: 'activeSnippet'
    }),
    methods: mapActions([
      'updateActiveSnippet'
    ]),
    created () {
      this.$store.dispatch('getAllSnippets')
    },
    actions: {
      test ({commit}) {
        console.log('testing')
      }
    }
  }
</script>
