<template>
    <div class="container">
        <Header :todoCount="todos.length"/> <hr>
        <NewTodo @addTodo="addTodo"
                @todoEdited="saveChanges"/> <hr>
        <Grid :allTodos="todos"
                @deleteTodo="deleteTodo"/> <hr>
        <Footer/>
    </div>
</template>

<script>
    import Header from '@/components/AppHeader.vue'
    import NewTodo from '@/components/AppNew.vue'
    import Grid from '@/components/AppGrid.vue'
    import Footer from '@/components/AppFooter.vue'

    export default {
        data(){
            return {
                todos: [
                    'Sample To-do'
                ]
            }
        },
        components: {
            Header,
            NewTodo,
            Grid,
            Footer
        },
        methods:{
            addTodo(todo){
                this.todos.push(todo);
            },
            saveChanges(todoToEdit){
                this.todos.splice(todoToEdit.todoId, 1, todoToEdit.todoTxt);
            },
            deleteTodo(index){
                this.todos.splice(index, 1);
            }
        }
    }
</script>

<style lang="css" scoped>
    .container {
        max-width: 800px;
    }
</style>