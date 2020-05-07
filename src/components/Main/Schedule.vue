<template>
    <div class="schedule">
        <div class="schedule-title">
            <span class="schedule-title--main">Cronograma</span>
            <span class="schedule-title--more">Ver tudo</span>
        </div>
        <div class="schedule-date">
            <span class="schedule-date--number">28/04/2020</span>
            <br />
            <span class="schedule-date--day">Terça-Feira</span>
        </div>
        <div class="schedule-container">
            <ScheduleCard :key="p" v-for="p in programs" :program="p" />
        </div>
    </div>
</template>

<script>
import ScheduleCard from './ScheduleCard'

export default {
    name: 'Schedule',
    components: { ScheduleCard },
    data() {
        return {
            programs: [
                {
                    title: 'Jornal Quixadá',
                    displayTime: '07:00h - 12:00h',
                    exhibition: 'Todos os dias',
                    synopsis:
                        'Confira as ultimas notícias locais, em noticiario com muito bom humor e descontração.',
                    isSelected: true
                },
                {
                    title: 'Cine Sertão',
                    displayTime: '13:45h - 15:00h',
                    exhibition: 'Todos os dias',
                    synopsis:
                        'O melhor do cinema você confere por aqui, nossa programação conta com filmes nacionais e internacionais.',
                    isSelected: false
                },
                {
                    title: 'Futebol Regional',
                    displayTime: '12:00h - 13:45h',
                    exhibition: 'Todas as Terças e Quintas',
                    synopsis:
                        'Torça pelo seu time assistindo a partidas dos campeonatos estaduais e regionais.',
                    isSelected: false
                }
                // {
                //     title: 'Show de Música',
                //     displayTime: '20:00h - 22:00h',
                //     exhibition: 'Todos os dias',
                //     synopsis: 'O melhor da música local.'
                // }
            ]
        }
    }
}
</script>

<style lang="scss">
.schedule-title {
    display: flex;
    justify-content: space-between;

    &--main {
        color: #20201f;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 2.4rem;
    }

    &--more {
        color: #2ccf72;
        font-weight: 600;
        font-size: 1.6rem;
    }
}

.schedule-date {
    color: #666;
    font-size: 1.6rem;
    line-height: 2rem;

    &--number {
        font-weight: 800;
    }

    &--day {
        font-weight: 400;
    }
}

.schedule-container {
    display: flex;
    flex-direction: row;
}
</style>