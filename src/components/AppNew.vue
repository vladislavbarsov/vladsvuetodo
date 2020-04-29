<template class="row">
    <div>
      <div class="form-group">
        <label>Enter To-do</label>
        <textarea class="form-control" rows="5" v-model="todo"></textarea>
      </div>
      <button @click.prevent="createNew" 
              class="btn btn-success"
              v-if="!editMode">Create New Note</button>
      <button @click.prevent="saveChanges" 
              class="btn btn-primary"
              v-else>Save Changes</button>
    </div>
</template>

<script>
    import {editTodo} from '@/main.js'
    export default {
        data(){
            return {
                todo: '',
                todoToEdit: {},
                editMode: false
            }
        },
        methods: {
            createNew(){
                this.$emit('addTodo', this.todo);
                this.note = '';
            },
            saveChanges(){
              this.todoToEdit.todoTxt = this.todo;
              this.$emit('todoEdited', this.todoToEdit);
              this.todoToEdit = {};
              this.editMode = false;
              this.todo = "";
            }
        },
        created(){
          editTodo.$on('selectedTodo', (todoObj)=>{
            this.todoToEdit = todoObj;
            this.todo = todoObj.todoTxt;
            this.editMode = true;
          })
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