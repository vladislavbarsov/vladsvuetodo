<template>
    <div>
        <TodoView v-for="todo in allTodos"
                    :key="todo"
                    >{{ todo }} </TodoView>
                    
    </div>
</template>

<script>
    import TodoView from '@/components/AppView.vue'
    export default {
        props: [
            'allTodos'
        ],
        components:{
            TodoView
        }
    }
</script>

<style lang="scss" scoped>

</style>