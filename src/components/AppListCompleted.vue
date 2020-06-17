<template>
    <div>
        <div>
            <h4>Completed To-do's</h4>
        </div>
        <div class="card">
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