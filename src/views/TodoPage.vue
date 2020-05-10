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
                this.todos.unshift(todo);
            },
            saveChanges(todoToEdit){
                this.todos.splice(todoToEdit.todoId, 1, todoToEdit.todoTxt);
            },
            completeTodo(completedTodo){
                this.todos.splice(completedTodo.todoId, 1);
                this.completedTodos.unshift(completedTodo.todoTxt);
            },
            restoreTodo(restoredTodo){
                this.completedTodos.splice(restoredTodo.todoId, 1);
                this.todos.unshift(restoredTodo.todoTxt);
            }
        }
    }
</script>

<style lang="css" scoped>
    .container {
        max-width: 800px;
    }
</style>