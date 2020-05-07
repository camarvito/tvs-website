<template>
    <div id="app">
        <Header />
        <Main />
        <About id="about" />
        <Partners />
    </div>
</template>

<script>
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import About from './components/About/About'
import Partners from './components/Partners/Partners'

export default {
    components: { About, Header, Main, Partners }
}
</script>

<style lang="scss">
</style>
