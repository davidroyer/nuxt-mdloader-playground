<template>
  <div>
    <h3>Global Component</h3>
    {{ name }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Global Component Data'
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  margin-bottom: 2.5em;
}
</style>
