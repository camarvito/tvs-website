<template>
    <div class="tv-box">
        <div class="video-player">A</div>
    </div>
</template>

<script>
export default {
    name: 'TvBox'
}
</script>

<style lang="scss">
.tv-box {
    position: absolute;
    display: block;
    margin: 0 auto;
    top: -5rem;
    width: 88.1rem;
    background-color: $white;
    border-radius: 1rem;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.6);
    padding: 5rem;
}

.video-player {
    background-color: $black;
    border-radius: 1rem;
    height: 40rem;
    width: 100%;
}
</style>