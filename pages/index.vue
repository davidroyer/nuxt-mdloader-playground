<template>
  <div class="container">
    <h1 class="title">Home</h1>
    <div class="content">
      <MarkdownFile />
      <hr />
      <h2>MD File</h2>
      <pre>{{ md }}</pre>
    </div>
  </div>
</template>

<script>
import mdFile from '@/contents/file1.md'
import LocalComponent from '@/components/LocalComponent'

mdFile.vue.component.components = {
  LocalComponent
}

console.log('TCL: mdFile', mdFile)

export default {
  components: { MarkdownFile: mdFile.vue.component },
  data() {
    return {
      md: mdFile
    }
  }
}
</script>
