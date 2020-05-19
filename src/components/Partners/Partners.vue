<template>
    <div class="partners">
        <SectionTitle
            class="section-title-partners"
            title="Patrocinadores"
            alignment="center"
        />
        <div class="partners__wrap page-container">
            <a target="_blank" href="https://www.quixada.ufc.br/">
                <img src="@/assets/img/ufc-logo.png" height="80px" />
            </a>
            <a
                target="_blank"
                href="https://www.instagram.com/inove_ufcquixada/"
            >
                <img src="@/assets/img/logo-inove-blue.png" height="70px" />
            </a>
        </div>
        <div class="cactus__container">
            <svg class="cactus__mini">
                <use xlink:href="@/assets/svg/cacto-mini.svg#cactus" />
            </svg>
            <svg class="cactus__super">
                <use xlink:href="@/assets/svg/cacto.svg#cactus" />
            </svg>
        </div>
    </div>
</template>

<script>
import SectionTitle from '../General/SectionTitle'

export default {
    components: { SectionTitle }
}
</script>

<style lang="scss">
.section-title-partners {
    padding-top: 10rem;
    text-align: center;

    @include respond(phone) {
        padding-top: 12rem;
    }
}

.partners {
    background-color: var(--body-bg);
    padding-top: 5rem;

    &__wrap {
        text-align: center;
        margin: 5rem 0 12rem 0;

        @include respond(phone) {
            margin: 4rem 0 4rem 0;
        }

        img {
            margin: 2rem 2rem;
            filter: saturate(0);
            transition: 0.3s;

            &:hover {
                filter: saturate(1);
                transform: scale(1.1);
            }
        }
    }
}

.cactus__container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 3rem;

    @include respond(phone) {
        padding: 0;
    }
}

.cactus__mini {
    height: 90px;
    width: 90px;
}

.cactus__super {
    height: 280px;
    width: 270px;
}
</style>
