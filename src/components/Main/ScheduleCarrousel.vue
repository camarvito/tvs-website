<template>
    <div class="card-carousel-wrapper">
        <div class="card-carousel--nav-box left" @click="moveCarousel(-1)">
            <span class="card-carousel--nav__left" :disabled="atHeadOfList"></span>
        </div>

        <div class="card-carousel">
            <div class="card-carousel--overflow-container">
                <div
                    class="card-carousel-cards"
                    :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}"
                >
                    <ScheduleCard
                        v-for="program in programs"
                        :key="program.id"
                        :program="program"
                        v-on:cardClicked="cardSelected($event)"
                    />
                </div>
            </div>
        </div>

        <div class="card-carousel--nav-box right" @click="moveCarousel(1)">
            <span class="card-carousel--nav__right" :disabled="atEndOfList"></span>
        </div>
    </div>
</template>

<script>
import ScheduleCard from './ScheduleCard'

export default {
    components: { ScheduleCard },
    data() {
        return {
            currentOffset: 0,
            windowSize: 3,
            paginationFactor: 280,
            programs: [
                {
                    id: 1,
                    title: 'Jornal Quixadá',
                    displayTime: '07:00h - 12:00h',
                    exhibition: 'Todos os dias',
                    synopsis:
                        'Confira as ultimas notícias locais, em noticiario com muito bom humor e descontração.',
                    isSelected: true
                },
                {
                    id: 2,
                    title: 'Cine Sertão',
                    displayTime: '13:45h - 15:00h',
                    exhibition: 'Todos os dias',
                    synopsis:
                        'O melhor do cinema você confere por aqui, nossa programação conta com filmes nacionais e internacionais.',
                    isSelected: false
                },
                {
                    id: 3,
                    title: 'Futebol Regional',
                    displayTime: '12:00h - 13:45h',
                    exhibition: 'Todas as Terças e Quintas',
                    synopsis:
                        'Torça pelo seu time assistindo a partidas dos campeonatos estaduais e regionais.',
                    isSelected: false
                },
                {
                    id: 4,
                    title: 'Show de Música',
                    displayTime: '20:00h - 22:00h',
                    exhibition: 'Todos os dias',
                    synopsis:
                        'O melhor da música local, nosso programa conta com shows ao vivo e entrevistas com muita animação.',
                    isSelected: false
                },
                {
                    id: 5,
                    title: 'Basquete Regional',
                    displayTime: '22:00h - 23:00h',
                    exhibition: 'Todos os dias',
                    synopsis:
                        'Venha ver o melhor do basquete regional, com narração do LeBron James de Quixaramobim.',
                    isSelected: false
                },
                {
                    id: 6,
                    title: 'Vaquejada',
                    displayTime: '23:00h - 00:00h',
                    exhibition: 'Todos os dias',
                    synopsis: 'Confira a vaquejada em toda região cearense.',
                    isSelected: false
                }
            ]
        }
    },
    computed: {
        atEndOfList() {
            return (
                this.currentOffset <=
                this.paginationFactor *
                    -1 *
                    (this.programs.length - this.windowSize)
            )
        },
        atHeadOfList() {
            return this.currentOffset === 0
        }
    },
    methods: {
        cardSelected(title) {
            this.programs.forEach(e => {
                if (e.title !== title) {
                    e.isSelected = false
                } else {
                    e.isSelected = true
                }
            })
        },
        moveCarousel(direction) {
            if (direction === 1 && !this.atEndOfList) {
                this.currentOffset -= this.paginationFactor
            } else if (direction === -1 && !this.atHeadOfList) {
                this.currentOffset += this.paginationFactor
            }
        }
    }
}
</script>

<style lang="scss">
.card-carousel-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    // margin: 20px 0 40px;
    color: #666a73;
}

.card-carousel {
    display: flex;
    justify-content: center;
    width: 880px;

    &--overflow-container {
        overflow: hidden;
    }

    &--nav-box {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
        border-radius: 8rem;
        height: 5rem;
        width: 5rem;
        cursor: pointer;

        &.right {
            margin-left: 1rem;
        }

        &.left {
            margin-right: 1rem;
        }
    }

    &--nav__left,
    &--nav__right {
        display: inline-block;
        align-items: center;
        width: 15px;
        height: 15px;
        padding: 6px;
        box-sizing: border-box;
        border-top: 2px solid #42b883;
        border-right: 2px solid #42b883;
        cursor: pointer;
        margin: 0 20px;
        transition: transform 150ms linear;
        &[disabled] {
            opacity: 0.2;
            border-color: black;
        }
    }

    &--nav__left {
        transform: rotate(-135deg);
        &:active {
            transform: rotate(-135deg) scale(0.9);
        }
    }

    &--nav__right {
        transform: rotate(45deg);
        &:active {
            transform: rotate(45deg) scale(0.9);
        }
    }
}

.card-carousel-cards {
    display: flex;
    transition: transform 150ms ease-out;
    transform: translatex(0px);
}
</style>