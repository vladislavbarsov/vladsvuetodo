<template class="row">
    <div>
      <div class="form-group">
        <label>Enter To-do</label>
        <textarea class="form-control" rows="5" v-model="todo"></textarea>
      </div>
      <button @click.prevent="createNew" class="btn btn-success">Create New Note</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                todo: ''
            }
        },
        methods: {
            createNew(){
                this.$emit('addTodo', this.todo);
                this.note = '';
            }
        }
    }
</script>

<style lang="css" scoped>
  button {
    font-size: 1.2em;
    margin-bottom: 16px;
    width: 100%
  }
</style>