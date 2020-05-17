<template>
    <div class="tv-box">
        <div class="video-player"></div>
        <div class="switch-light" @click="switchLight">
            {{ isLightOff.text }}
            <svg v-show="isLightOff.value" class="highlight-on">
                <use xlink:href="@/assets/svg/highlight-on.svg#highlight-on" />
            </svg>
            <svg v-show="!isLightOff.value" class="highlight-off">
                <use xlink:href="@/assets/svg/highlight-off.svg#highlight-off" />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TvBox',
    methods: {
        switchLight() {
            this.$store.state.darkTheme = !this.$store.state.darkTheme
        }
    },
    computed: {
        isLightOff() {
            return this.$store.state.darkTheme
                ? {
                      text: 'Acender luzes',
                      value: true
                  }
                : {
                      text: 'Apagar luzes',
                      value: false
                  }
        }
    }
}
</script>

<style lang="scss">
.tv-box {
    position: relative;
    display: block;
    margin: 0 auto;
    top: -5rem;
    background-color: var(--tv-border);
    border-radius: 1rem;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.6);
    padding: 5rem;
    padding-bottom: 3rem;
    transition-duration: 0.3s;
}

.video-player {
    background-color: var(--black);
    border-radius: 1rem;
    height: 40rem;
    width: 100%;
}

.switch-light {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    color: var(--text-color-1);
    margin-top: 1rem;
    cursor: pointer;
}

.highlight-on {
    height: 2.5rem;
    width: 2rem;
    margin: 0 0.5rem;
    transform: rotate(90deg);
    fill: var(--white);
}

.highlight-off {
    height: 2rem;
    width: 2rem;
    margin: 0 0.5rem;
}
</style>