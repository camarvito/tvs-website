<template>
    <nav class="navbar page-container">
        <svg class="navbar__logo">
            <use xlink:href="@/assets/svg/logo-light.svg#logo" />
        </svg>
        <ul class="navbar__list">
            <li class="navbar__list--item active">
                <a href="#home">Home</a>
            </li>
            <li class="navbar__list--item">
                <a href="#about">Sobre Nós</a>
            </li>
            <li class="navbar__list--item">
                <a href="#partners">Patrocinadores</a>
            </li>
            <li class="navbar__list--item">
                <a href="#contact">Fale Conosco</a>
            </li>
        </ul>
        <Button title="Baixar Aplicativo" :action="goToStore" />
    </nav>
</template>

<script>
import Button from '../General/Button'

export default {
    components: { Button },
    methods: {
        goToStore() {
            window.open('https://play.google.com/store')
        }
    }
}
</script>

<style lang="scss">
.navbar {
    display: flex;
    width: 100%;
    align-items: center;
    // position: fixed;
    // background-color: $nav-bg;
    // z-index: 1000;

    &__logo {
        height: 10rem;
        width: 15.3rem;
    }

    &__list {
        display: flex;
        justify-content: flex-end;
        flex: 1;
        list-style: none;

        &--item {
            display: inline;
            color: var(--grey-2);
            margin: 0 3.5rem;
            text-transform: uppercase;
            letter-spacing: 0.05rem;
            font-size: 1.4rem;
            font-weight: bold;
            cursor: pointer;

            a,
            a:visited {
                color: inherit;
                text-decoration: none;
            }

            &:hover {
                color: var(--grey-1);
            }

            &.active {
                color: var(--white);
                cursor: default;
            }

            &:last-child {
                margin-right: 7rem;
            }
        }
    }
}
</style>