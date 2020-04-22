<template lang="html">
  <div class="card">
    <ul class="list-group list-group-flush">
      <li class="note list-group-item">
        <slot></slot>
      </li>
    </ul>
  </div>
</template>
<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
    .note {
        cursor: pointer;
    }
    .note:hover {
        background-color: #d6f7c3;
    }
</style>