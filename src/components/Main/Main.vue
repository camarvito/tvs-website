<template>
    <div class="main page-container">
        <div class="page-container">
            <TvBox />
            <div class="coloors">Nigga please</div>
        </div>
    </div>
</template>

<script>
import TvBox from './TvBox'

export default {
    name: 'Main',
    components: { TvBox }
}
</script>

<style lang="scss">
.main {
    position: relative;
    height: 100vh;
    background-color: $body-bg;
}

.coloors {
    display: block;
    // z-index: 100;
    width: 100%;
    background-color: orangered;
}
</style>