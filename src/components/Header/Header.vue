<template>
    <header class="header">
        <Navbar />
        <div class="title page-container">
            <h1 class="title__main">
                Diversão,
                <br />Cultura e <br />Informação
            </h1>
            <h2 class="title__sub">
                Saiba de tudo que ocorre no sertão central direto da
                <br />nossa programação.
            </h2>
        </div>
    </header>
</template>

<script>
import Navbar from './Navbar'

export default {
    components: { Navbar },
    name: 'Header'
}
</script>

<style lang="scss">
.header {
    display: flex;
    flex-direction: column;
    height: 60rem;
    background-image: url('../../assets/img/header-bg.png');
}

.title {
    margin-top: 5rem;
    margin-bottom: auto;

    animation: 1.5s ease-in fadeIn;

    color: $white;

    &__main {
        font-weight: 800;
        font-size: 6rem;
        text-transform: uppercase;
        line-height: 7rem;
        letter-spacing: 0.1rem;
    }

    &__sub {
        font-family: 'Merriweather';
        font-weight: 700;
        font-size: 1.6rem;
        margin-top: 1rem;
    }
}
</style>
