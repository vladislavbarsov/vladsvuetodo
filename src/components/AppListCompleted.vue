<template>
    <div>
        <div>
            <h4>Completed To-do's</h4>
        </div>
        <div class="card">
            <ul class="list-group list-group-flush">
                <transition-group tag="span" name="animation">
                    <li class="note list-group-item animation-item list-group-item-light"
                        v-for="todo in allCompleted"
                        :key="todo"
                        v-long-press="300"
                        @long-press-start="restoreTodo(todo)"
                        >{{ todo }}</li>
                </transition-group>

            </ul>
        </div>
    </div>
</template>

<script>
    import LongPress from 'vue-directive-long-press'
    export default {
        props: [
            'allCompleted'
        ],
        directives: {
            'long-press': LongPress
        },
        methods:{
            restoreTodo(todo){
                //console.log(todo);
                this.$emit('restoreTodo', todo)
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