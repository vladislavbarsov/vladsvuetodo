<template lang="html">
  <div class="text-center">
    <h1>Vue To-do's</h1>
    <p>Your Current To-do count is - {{ todoCount }}</p>
  </div>
</template>

<script>
export default {
  props: ['todoCount']
}
</script>

<style lang="css" scoped>
.text-center {
    text-align: center!important;
}
</style>
