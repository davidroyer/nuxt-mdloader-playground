<template>
  <div class="markdown-file-wrapper">
    <MarkdownFile />
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
// eslint-disable-next-line no-unused-vars
import LocalComponent from '@/components/LocalComponent'
import mdFile from '@/contents/file1.md'
console.log('TCL: mdFile', mdFile)
mdFile.vue.component.components = {
  LocalComponent
}
export default {
  components: { MarkdownFile: mdFile.vue.component },
  data() {
    return {
      md: mdFile
    }
  }
}
</script>
