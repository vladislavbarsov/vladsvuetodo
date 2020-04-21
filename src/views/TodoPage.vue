<template>
    <div class="container">
        <Header :noteCount="notes.length"/>
        <NewTodo/>
        <Grid/>
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
                notes: [
                    'Sample Note'
                ]
            }
        },
        components: {
            Header,
            NewTodo,
            Grid,
            Footer
        }
    }
</script>

<style lang="scss" scoped>

</style>