<template>
    <div>
        <Header/>
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