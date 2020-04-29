<template>
    <div class="card">
        <ul class="list-group list-group-flush">
            <li class="note list-group-item" 
                v-for="(todo, index) in allTodos" 
                :key="todo"
                @click.prevent="selectTodo(todo, index)">
                {{ todo }}
            </li>
        </ul>            
    </div>
</template>

<script>
    import {editTodo} from '@/main.js'
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
            }
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