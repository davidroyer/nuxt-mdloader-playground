<template>
  <div>
    <h3>Local Component</h3>
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Local Component Data'
    }
  }
}
</script>

<style lang="css" scoped>
h3 {
  margin-bottom: 1.5em;
}
</style>
