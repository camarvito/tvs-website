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
        <ScheduleCarrousel />
    </div>
</template>

<script>
import ScheduleCard from './ScheduleCard'
import ScheduleCarrousel from './ScheduleCarrousel'

export default {
    name: 'Schedule',
    components: { ScheduleCard, ScheduleCarrousel }
}
</script>

<style lang="scss">
.schedule-title {
    display: flex;
    justify-content: space-between;

    &--main {
        color: var(--text-color-4);
        text-transform: uppercase;
        font-weight: 600;
        font-size: 2.4rem;
    }

    &--more {
        color: var(--green-1);
        font-weight: 600;
        font-size: 1.6rem;
    }
}

.schedule-date {
    color: var(--text-color-3);
    font-size: 1.6rem;
    line-height: 2rem;

    &--number {
        font-weight: 800;
    }

    &--day {
        font-weight: 400;
    }
}
</style>
