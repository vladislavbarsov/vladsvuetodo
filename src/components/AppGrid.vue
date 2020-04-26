<template>
    <div class="card">

        <ul class="list-group list-group-flush">
            <li class="note list-group-item" 
                v-for="todo in allTodos" 
                :key="todo">
                {{ todo }}
            </li>
        </ul>
                    
    </div>
</template>

<script>
    
    export default {
        props: [
            'allTodos'
        ]
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