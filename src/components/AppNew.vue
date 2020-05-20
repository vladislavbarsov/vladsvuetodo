<template class="row">
    <div>
      <div class="form-group">
        <label v-if="!this.$store.state.editMode">Enter To-do</label>
        <label v-else>Edit To-do</label>
        <textarea class="form-control" rows="5" v-model="todo"></textarea>
      </div>
      <button @click.prevent="createNew" 
              class="btn btn-success"
              v-if="!this.$store.state.editMode">Create New Note</button>
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
                todoToEdit: {}
            }
        },
        methods: {
            createNew(){
                if(this.todo != ''){
                  this.$emit('addTodo', this.todo);
                } else {
                  alert("Please enter a todo")
                }
                this.todo = '';
            },
            saveChanges(){
              this.todoToEdit.todoTxt = this.todo;
              this.$emit('todoEdited', this.todoToEdit);
              this.todoToEdit = {};
              this.$store.state.editMode = false;
              this.todo = "";
            }
        },
        created(){
          editTodo.$on('selectedTodo', (todoObj)=>{
            this.todoToEdit = todoObj;
            this.todo = todoObj.todoTxt;
            this.$store.state.editMode = true;
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