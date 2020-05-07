<template>
    <div class="tv-box">
        <div class="video-player"></div>
        <div class="switch-light">
            Apagar Luzes
            <svg class="highlight-icon">
                <use xlink:href="@/assets/svg/highlight-on.svg#highlight-on" />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TvBox'
}
</script>

<style lang="scss">
.tv-box {
    position: relative;
    display: block;
    margin: 0 auto;
    top: -5rem;
    width: 88.1rem;
    background-color: $white;
    border-radius: 1rem;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.6);
    padding: 5rem;
    padding-bottom: 3rem;
}

.video-player {
    background-color: $black;
    border-radius: 1rem;
    height: 40rem;
    width: 100%;
}

.switch-light {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    color: $black;
    margin-top: 1rem;
}

.highlight-icon {
    height: 2.5rem;
    width: 2rem;
    margin: 0 0.5rem;
    transform: rotate(90deg);
}
</style>