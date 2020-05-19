<template>
    <div class="contact">
        <div class="page-container">
            <SectionTitle class="section-title" title="Fale Conosco" alignment="center" />
            <div class="contact__container">
                <div class="contact__icon-box">
                    <svg class="contact__vetor">
                        <use xlink:href="@/assets/svg/contact-light.svg#contact" />
                    </svg>
                </div>
                <div class="contact__form">
                    <label for="name">Nome</label>
                    <input type="text" id="name" placeholder="Digite seu nome aqui" />

                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Digite seu email aqui" />

                    <label for="phone">Telefone</label>
                    <input type="text" id="phone" placeholder="(88) 12345-6789" />

                    <label for="message">Mensagem</label>
                    <textarea
                        rows="4"
                        cols="60"
                        id="message"
                        placeholder="Digite seu texto aqui..."
                    />

                    <Button
                        title="Enviar mensagem"
                        :action="sendMsg"
                        style="width: 18rem; font-weight: 600; text-transform: uppercase;"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SectionTitle from '../General/SectionTitle'
import Button from '../General/Button'

export default {
    components: { SectionTitle, Button },
    methods: {
        sendMsg() {
            alert('Mensagem enviada!')
        }
    }
}
</script>

<style lang="scss">
.section-title {
    text-align: center;
    margin-bottom: 6rem;

    @include respond(tab-land) {
        justify-content: center;
    }
}
.contact {
    padding-top: 5rem;
    padding-bottom: 5rem;
    background-color: var(--contact-bg);
    width: 100%;

    &__container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 3rem;

        @include respond(tab-land) {
            grid-template-columns: 1fr;
        }
    }

    &__icon-box {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        height: 50rem;

        @include respond(tab-land) {
            display: none;
        }
    }

    &__vetor {
        margin-left: auto;
        margin-top: auto;
        margin-bottom: auto;
        height: 50%;
        width: 85%;
    }

    &__form {
        display: flex;
        flex-direction: column;

        & label {
            font-weight: 600;
            font-size: 1.6rem;
            color: var(--text-color-3);
        }

        & input[type*='text'],
        input[type*='email'] {
            border: none;
            padding: 1rem 1.3rem;
            margin: 1rem 0 2rem 0;
            width: 80%;
            border-radius: 0.4rem;
            font-family: 'Muli';
            font-size: 1.4rem;
            font-weight: 600;
            background-color: var(--white);
            box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.05);

            @include respond(tab-land) {
                width: 100%;
            }
        }

        & textarea {
            width: 80%;
            margin: 1rem 0 2rem 0;
            padding: 1rem 1.3rem;
            border-radius: 0.4rem;
            font-family: 'Muli';
            font-size: 1.4rem;
            font-weight: 600;
            border: none;
            box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.05);

            @include respond(tab-land) {
                width: 100%;
            }
        }

        & button {
            @include respond(tab-land) {
                align-self: center;
            }
        }
    }

    /* width="1013.44925" height="610.28138" */
}
</style>