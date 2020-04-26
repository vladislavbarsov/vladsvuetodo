<template>
    <div class="container">
        <Header :todoCount="todos.length"/> <hr>
        <NewTodo @addTodo="addTodo"/> <hr>
        <Grid :allTodos="todos"/> <hr>
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
            }
        }
    }
</script>

<style lang="css" scoped>
    .container {
        max-width: 800px;
    }
</style>