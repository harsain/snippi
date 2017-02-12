<template>
  <div>
    <ul class="list-group" v-for="snippet in snippets">
      <li class="list-group-header">
        <input class="form-control" type="text" placeholder="Search...">
      </li>

      <li class="list-group-item" v-on:click="updateActiveSnippet(snippet)">
        <img class="img-circle media-object pull-left" src="/assets/img/avatar.jpg" width="32" height="32">
        <div class="media-body">
          <strong>{{'ID ' + snippet.id }}</strong>
          <p>{{'Description ' + snippet.description }}</p>
        </div>
      </li>
    </ul>
    <div>

      <codemirror v-model="code" :options="editorOption" :hint="true" ref="myEditor"></codemirror>

      <!--<div v-on:click="updateActiveSnippet(snippet)">
        <el-card class="box-card">
          {{'ID ' + snippet.id }}
          {{'Description ' + snippet.description }}
        </el-card>
      </div>-->
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
    data () {
      return {
        code: 'var test = 2;',
        editorOption: {
          tabSize: 4,
          mode: 'text/javascript',
          theme: 'base16-dark',
          lineNumbers: true,
          line: true,
          keyMap: 'sublime',
          extraKeys: { 'Ctrl': 'autocomplete' },
          foldGutter: true,
          gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
          styleSelectedText: true,
          highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true }
        }
      }
    },
    computed: mapGetters({
      snippets: 'allSnippets',
      activeSnippet: 'activeSnippet',
      editor () {
        return this.$refs.myEditor.editor
      }
    }),
    methods: mapActions({
      updateActiveSnippet: 'updateActiveSnippet'
    }),
    created () {
      this.$store.dispatch('getAllSnippets')
    },
    actions: {
      test ({commit}) {
        console.log('testing')
      }
    },
    mounted () {
      console.log('this is current editor object', this.editor)
    }
  }
</script>
