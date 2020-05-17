<template>
    <footer class="footer">
        <div class="footer__container page-container">
            <div class="footer__info">
                <svg class="footer__info--logo">
                    <use xlink:href="@/assets/svg/logo-light.svg#logo" />
                </svg>
                <div class="footer__info--legal">
                    © 2020 - 2021
                    <br />Emissora Tv Sertão.
                    <br />Todos os direitos reservados.
                    <br />
                    <span>
                        Design by
                        <a
                            target="_blank"
                            href="https://www.instagram.com/draw.arley/"
                        >Arley</a> and
                        <a target="_blank" href="https://github.com/camarvito">Vito</a>
                    </span>
                </div>
            </div>
            <div class="footer__social-media">
                <span
                    style="align-self: flex-end; margin-bottom: 1rem; padding-right: .8rem;"
                >Mídia Social</span>
                <span>
                    <svg class="footer__social-media--icon">
                        <use xlink:href="@/assets/svg/facebook.svg#facebook" />
                    </svg>
                    <svg class="footer__social-media--icon">
                        <use xlink:href="@/assets/svg/instagram.svg#instagram" />
                    </svg>
                    <svg class="footer__social-media--icon">
                        <use xlink:href="@/assets/svg/twitter.svg#twitter" />
                    </svg>
                    <svg class="footer__social-media--icon">
                        <use xlink:href="@/assets/svg/youtube.svg#youtube" />
                    </svg>
                </span>
            </div>
        </div>
    </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
.footer {
    height: 15rem;
    background-color: var(--footer-bg);

    &__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    &__info {
        display: flex;
        justify-content: space-between;

        &--logo {
            width: 170px;
            height: 75px;
        }

        &--legal {
            display: flex;
            flex-direction: column;
            margin-top: 1rem;
            line-height: 1.6rem;
            color: var(--white);
            font-size: 1.2rem;

            span {
                a,
                a:visited {
                    color: inherit;
                    text-decoration: none;
                    &:hover {
                        color: var(--green-1);
                    }
                }
            }
        }
    }

    &__social-media {
        display: flex;
        flex-direction: column;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        color: var(--white);
        font-weight: 600;
        font-size: 1.4rem;

        &--icon {
            margin: 0 1rem;
            height: 3.2rem;
            width: 3.2rem;
            fill: var(--white);
            cursor: pointer;

            &:hover {
                fill: var(--green-1);
            }
        }
    }
}
</style>