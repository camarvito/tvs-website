<template>
    <div class="about page-container">
        <SectionTitle
            class="section-title-about"
            title="Sobre nós"
            alignment="left"
        />
        <div class="about__content">
            <div class="about__content--text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora quibusdam nesciunt velit
                <br />exercitationem ea cum quasi obcaecati consequatur corrupti
                dolorem, officiis consequuntur repudiandae odit tenetur
                <br />reiciendis hic beatae repellat asperiores. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. <br />Voluptatem
                aut explicabo sed dolorem perspiciatis iure, voluptates fuga hic
                nam similique. <br />Repellat soluta aliquid nesciunt, doloribus
                sed quam quia voluptatem. Saepe!
            </div>
            <div class="about__content--icon-container">
                <svg class="about__vetor">
                    <use
                        xlink:href="@/assets/svg/about-us-light.svg#about-us-light"
                    />
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import SectionTitle from '../General/SectionTitle.vue'
export default {
    components: { SectionTitle }
}
</script>

<style lang="scss">
.section-title-about {
    margin-top: 10rem;

    @include respond(tab-land) {
        align-self: center;
    }
}

.about {
    display: flex;
    flex-direction: column;
    height: 70vh;
    background-color: var(--body-bg);

    &__vetor {
        margin-top: -10rem;
        height: 400px;
        width: 400px;
    }

    &__content {
        display: grid;
        grid-template-columns: 1fr 1fr;

        @include respond(tab-land) {
            grid-template-columns: 1fr;
        }

        &--text {
            display: flex;
            align-items: center;
            font-family: 'Merriweather';
            font-size: 1.6rem;
            color: var(--text-color-2);

            @include respond(phone) {
                margin: 0;
                text-align: center;
            }
        }

        &--icon-container {
            display: flex;
            align-items: center;
            justify-content: center;

            @include respond(tab-land) {
                display: none;
            }
        }
    }
}
</style>
