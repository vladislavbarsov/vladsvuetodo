<template>
    <div class="card">
        <ul class="list-group list-group-flush">
            <li class="note list-group-item" 
                v-for="(todo, index) in allTodos" 
                :key="todo"
                @click.prevent="selectTodo(todo, index)"
                v-long-press="300"
                @long-press-start="deleteTodo(index)">
                {{ todo }}
            </li>
        </ul>            
    </div>
</template>

<script>
    import {editTodo} from '@/main.js'
    import LongPress from 'vue-directive-long-press'
    export default {
        props: [
            'allTodos'
        ],
        data(){
            return {
                selectedTodo: {}
            }
        },
        methods: {
            selectTodo(todo, index){
                this.selectedTodo.todoId = index;
                this.selectedTodo.todoTxt = todo;
                editTodo.$emit('selectedTodo', this.selectedTodo);
            },
            deleteTodo(index){
                this.$emit('deleteTodo', index);
            }
        },
        directives: {
            'long-press': LongPress
        }
    }
</script>

<style lang="css" scoped>
    .note {
        cursor: pointer;
    }
    .note:hover {
        background-color: #d6f7c3;
    }
    li {
        font-style: italic;
    }
    
</style>