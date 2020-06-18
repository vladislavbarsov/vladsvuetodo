<template>
    <div>
        <div class="d-flex justify-content-between">
            <h4>Completed To-do's</h4>
            <button type="button" 
                class="btn btn-link text-success"
                @click.prevent="clearList"
                v-if="!(Array.isArray(this.$store.state.completedTodos) && this.$store.state.completedTodos.length === 0)">Clear All</button>
        </div>
        <div class="card" 
            v-if="!(Array.isArray(this.$store.state.completedTodos) && this.$store.state.completedTodos.length === 0)">
            <ul class="list-group list-group-flush">
                <transition-group tag="span" name="animation">
                    <li class="note list-group-item animation-item list-group-item-light"
                        v-for="(todo, index) in allCompleted"
                        :key="todo">
                        <div class="row d-flex justify-content-between">
                            <div class="col-11"
                                v-long-press="300"
                                @long-press-start="restoreTodo(todo, index)">
                                {{ todo }}
                            </div>
                            <div class="col text-right">
                                <span class="border-0"
                                @click.prevent="deleteTodo(todo, index)">X</span>
                            </div>
                        </div>
                    </li>
                </transition-group>
            </ul>
        </div>
        <div class="card font-italic text-black-50 text-center border-0 h3 font-weight-lighter" 
            v-else>
            You have no compleated To-do's
        </div>
    </div>
</template>

<script>
    import LongPress from 'vue-directive-long-press'
    export default {
        data(){
            return {
                restoredTodo: {},
                todoToDelete: {}
            }
        },
        props: [
            'allCompleted'
        ],
        directives: {
            'long-press': LongPress
        },
        methods:{
            restoreTodo(todo, index){
                if(!this.$store.state.editMode){
                    this.restoredTodo.todoId = index;
                    this.restoredTodo.todoTxt = todo;
                    this.$emit('restoreTodo', this.restoredTodo);
                } else {
                    alert("Please Save Changes Before Doing That");
                }
            },
            deleteTodo(index){
                this.todoToDelete.todoId = index;
                this.todoToDelete.todoList = 'completed';
                this.$emit('deteleTodo', this.todoToDelete);
            },
            clearList(){
                this.$emit('clearList', true);
            }
        }
    }
</script>

<style lang="css" scoped>
    .note {
        cursor: pointer;
    }
    .note:hover {
        background-color: #F1F1F1;
    }
    li {
        font-style: italic;
    }
    .animation-item {
        transition: all .2s;
    }
    .animation-enter, .animation-leave-to {
        opacity: 0;
        transform: translateY(400px)
    }
    .animation-leave-active {
        position: absolute;
    }
</style>