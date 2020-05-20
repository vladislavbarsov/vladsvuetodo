<template>
    <div class="container">
        <Header :todoCount="todos.length"/> <hr>
        <NewTodo @addTodo="addTodo"
                @todoEdited="saveChanges"/> <hr>
        <Grid :allTodos="todos"
                @completeTodo="completeTodo"/> <hr>
        <ListComplete :allCompleted="completedTodos"
                @restoreTodo="restoreTodo"/> <hr>
        <Footer/>
    </div>
</template>

<script>
    import Header from '@/components/AppHeader.vue'
    import NewTodo from '@/components/AppNew.vue'
    import Grid from '@/components/AppGrid.vue'
    import ListComplete from '@/components/AppListCompleted.vue'
    import Footer from '@/components/AppFooter.vue'


    export default {
        data(){
            return {
                todos: [
                    'Sample To-do'
                ],
                completedTodos: [
                    'Completed To-do'
                ]
            }
        },
        components: {
            Header,
            NewTodo,
            Grid,
            ListComplete,
            Footer
        },
        methods:{
            addTodo(todo){
                if(this.duplicateCheck(todo, this.todos)){
                    this.todos.unshift(todo);
                } else {
                    alert("This todo already exists in the Active todo list")
                }
            },
            saveChanges(todoToEdit){
                if(this.duplicateCheck(todoToEdit.todoTxt, this.todos)){
                    this.todos.splice(todoToEdit.todoId, 1, todoToEdit.todoTxt);
                } else {
                    alert("This todo already exists in the Active todo list")
                }
            },
            completeTodo(completedTodo){
                if(this.duplicateCheck(completedTodo.todoTxt, this.completedTodos)){
                    this.completedTodos.unshift(completedTodo.todoTxt);
                } else {
                    alert("This todo already exists in the Completed list")
                }
                this.todos.splice(completedTodo.todoId, 1);
            },
            restoreTodo(restoredTodo){
                if(this.duplicateCheck(restoredTodo.todoTxt, this.todos)){ 
                    this.todos.unshift(restoredTodo.todoTxt);
                } else {
                    alert("This todo already exists in the Active todo list")
                }
                this.completedTodos.splice(restoredTodo.todoId, 1);
            },
            duplicateCheck(todo, list){
                if(list.indexOf(todo) == -1){
                    return true
                } else {
                    return false
                }
            }
        }
    }
</script>

<style lang="css" scoped>
    .container {
        max-width: 800px;
    }
</style>