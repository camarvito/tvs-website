<template>
    <div class="schedule-card" @click="emitSelect">
        <div
            class="schedule-card__title"
            :class="{ active: program.isSelected }"
        >{{ program.title }}</div>
        <div class="schedule-card__info">
            <div class="schedule-card__info--subtitle">Informações</div>
            <div class="schedule-card__info--text">
                <svg class="schedule-card__info--icon">
                    <use xlink:href="@/assets/svg/clock.svg#clock" />
                </svg>
                {{ program.displayTime }}
            </div>
            <div class="schedule-card__info--text">
                <svg class="schedule-card__info--icon">
                    <use xlink:href="@/assets/svg/calendar.svg#calendar" />
                </svg>
                {{ program.exhibition }}
            </div>
            <div class="schedule-card__info--subtitle">Sinopse</div>
            <div class="schedule-card__info--text">{{ program.synopsis }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ScheduleCard',
    props: {
        program: {
            type: Object,
            required: true
        }
    },
    methods: {
        emitSelect() {
            this.$emit('cardClicked', this.program.title)
        }
    }
}
</script>

<style lang="scss">
.schedule-card {
    min-width: 25rem;
    background-color: $white;
    margin: 3rem 1.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);

    &__title {
        display: flex;
        justify-content: center;
        font-weight: 400;
        font-size: 1.8rem;
        color: #8c8c8c;
        background-color: #f9f5eb;
        padding: 1.2rem 0;
        border-top-right-radius: 0.5rem;
        border-top-left-radius: 0.5rem;

        &.active {
            background-color: #219653;
            color: #fff;
        }
    }

    &__info {
        padding: 2rem 1.5rem;

        &--text {
            display: flex;
            align-items: center;
            font-size: 1.2rem;
            color: #8c8c8c;
        }

        &--icon {
            margin-right: 0.5rem;
            height: 2.3rem;
            width: 2.2rem;
            fill: $grey-3;

            &:last-child {
                margin: 0.5rem;
                margin-left: 0;
            }
        }

        &--subtitle {
            color: $grey-3;
            font-size: 1.4rem;
            font-weight: 600;
            margin: 1rem 0;

            &:first-child {
                margin-top: 0;
            }
        }
    }
}
</style>
