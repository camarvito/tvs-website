<template>
    <div id="app" :theme="theme">
        <Header id="home" />
        <Main />
        <About id="about" />
        <Partners id="partners" />
        <Contact id="contact" />
        <Footer />
    </div>
</template>

<script>
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import About from './components/About/About'
import Partners from './components/Partners/Partners'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default {
    components: { About, Header, Main, Partners, Contact, Footer },
    computed: {
        theme() {
            return this.$store.state.darkTheme ? 'dark' : 'light'
        }
    }
}
</script>

<style lang="scss">
</style>
