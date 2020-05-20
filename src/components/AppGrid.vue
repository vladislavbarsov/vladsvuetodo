<template>
    <div>
        <div>
            <h4>Active To-do's</h4>
        </div>
        <div class="card">
            <ul class="list-group list-group-flush">
                <transition-group tag="span" name="animation">
                    <li class="note list-group-item animation-item list-group-item-success" 
                        v-for="(todo, index) in allTodos" 
                        :key="todo"
                        @click.prevent="selectTodo(todo, index)"
                        v-long-press="300"
                        @long-press-start="completeTodo(todo, index)">
                        {{ todo }}
                    </li>
                </transition-group>
            </ul>            
    </div>
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
                selectedTodo: {},
                completedTodo: {}
            }
        },
        methods: {
            selectTodo(todo, index){
                this.selectedTodo.todoId = index;
                this.selectedTodo.todoTxt = todo;
                editTodo.$emit('selectedTodo', this.selectedTodo);
            },
            completeTodo(todo, index){
                if(!this.$store.state.editMode){
                    this.completedTodo.todoId = index;
                    this.completedTodo.todoTxt = todo;
                    this.$emit('completeTodo', this.completedTodo);
                } else {
                    alert("Please Save Changes Before Doing That");
                }
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
    .animation-item {
        transition: all .2s;
    }
    .animation-enter, .animation-leave-to {
        opacity: 0;
        transform: translateY(100px)
    }
    .animation-leave-active {
        position: absolute;
    }
</style>