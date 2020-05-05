<template>
    <nav class="navbar page-container">
        <svg class="navbar__logo">
            <use xlink:href="@/assets/svg/logo-light.svg#logo" />
        </svg>
        <ul class="navbar__list">
            <li class="navbar__list--item">Home</li>
            <li class="navbar__list--item active">Sobre Nós</li>
            <li class="navbar__list--item">Patrocinadores</li>
            <li class="navbar__list--item">Fale Conosco</li>
        </ul>
        <Button title="Baixar Aplicativo" :action="goToStore" />
    </nav>
</template>

<script>
import Button from '../Form/Button'

export default {
    components: { Button },
    methods: {
        goToStore() {
            window.open('https://play.google.com/')
        }
    }
}
</script>

<style lang="scss">
.navbar {
    display: flex;
    align-items: center;
    // background-color: $nav-bg;

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
            color: $grey-1;
            margin: 0 3.5rem;
            text-transform: uppercase;
            letter-spacing: 0.05rem;
            font-size: 1.4rem;
            font-weight: bold;
            cursor: pointer;

            &.active {
                color: $white;
                cursor: default;
            }

            &:last-child {
                margin-right: 7rem;
            }
        }
    }
}
</style>