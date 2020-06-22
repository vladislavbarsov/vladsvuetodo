<template>
    <div class="container">
        <Header :todoCount="this.$store.state.todos.length"/> <hr>
        <NewTodo @addTodo="addTodo"
                @todoEdited="saveChanges"/> <hr>
        <Grid :allTodos="this.$store.state.todos"
                @completeTodo="completeTodo"
                @deteleTodo="deleteTodo"/> <hr>
        <ListComplete :allCompleted="this.$store.state.completedTodos"
                @restoreTodo="restoreTodo"
                @deteleTodo="deleteTodo"
                @clearList="clearList"/> <hr>
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
        components: {
            Header,
            NewTodo,
            Grid,
            ListComplete,
            Footer
        },
        methods:{
            retrieveLS(){
                this.$store.state.todos = JSON.parse(localStorage.getItem('activeTodoList'));
                this.$store.state.completedTodos = JSON.parse(localStorage.getItem('completedTodoList'));
            },
            updateLS(){
                localStorage.setItem('activeTodoList', JSON.stringify(this.$store.state.todos));
                localStorage.setItem('completedTodoList', JSON.stringify(this.$store.state.completedTodos));
            },
            addTodo(todo){
                if(this.duplicateCheck(todo, this.$store.state.todos)){
                    this.$store.state.todos.unshift(todo);
                    this.updateLS();
                } else {
                    alert("This todo already exists in the Active todo list")
                }
            },
            saveChanges(todoToEdit){
                if(this.duplicateCheck(todoToEdit.todoTxt, this.$store.state.todos)){
                    this.$store.state.todos.splice(todoToEdit.todoId, 1, todoToEdit.todoTxt);
                    this.updateLS();
                } else {
                    alert("This todo already exists in the Active todo list")
                }
            },
            completeTodo(completedTodo){
                if(this.duplicateCheck(completedTodo.todoTxt, this.$store.state.completedTodos)){
                    this.$store.state.completedTodos.unshift(completedTodo.todoTxt);
                } else {
                    alert("This todo already exists in the Completed list")
                }
                this.$store.state.todos.splice(completedTodo.todoId, 1);
                this.updateLS();
            },
            restoreTodo(restoredTodo){
                if(this.duplicateCheck(restoredTodo.todoTxt, this.$store.state.todos)){ 
                    this.$store.state.todos.unshift(restoredTodo.todoTxt);
                } else {
                    alert("This todo already exists in the Active todo list")
                }
                this.$store.state.completedTodos.splice(restoredTodo.todoId, 1);
                this.updateLS();
            },
            deleteTodo(todoToDelete){
                if(todoToDelete.todoList == 'active'){
                    this.$store.state.todos.splice(todoToDelete.todoId, 1);
                } else if(todoToDelete.todoList == 'completed') {
                    this.$store.state.completedTodos.splice(todoToDelete.todoId, 1);
                }
                this.updateLS();
            },
            clearList(){
                this.$store.state.completedTodos = [];
                this.updateLS();
            },
            duplicateCheck(todo, list){
                if(list.indexOf(todo) == -1){
                    return true
                } else {
                    return false
                }
            }
        },
        created(){
            this.retrieveLS();
        }
    }
</script>

<style lang="css" scoped>
    .container {
        max-width: 800px;
    }
</style>