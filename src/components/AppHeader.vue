<template lang="html">
  <div class="text-center">
    <h1>Vue Notes</h1>
    <p>Your Current Note count is - {{ noteCount }}</p>
  </div>
</template>

<script>
export default {
  props: ['noteCount']
}
</script>

<style lang="css" scoped>
.text-center {
    text-align: center!important;
}
</style>
