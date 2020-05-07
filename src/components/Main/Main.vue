<template>
    <div class="main page-container">
        <div class="page-container">
            <TvBox />
            <Schedule />
        </div>
    </div>
</template>

<script>
import TvBox from './TvBox'
import Schedule from './Schedule'

export default {
    name: 'Main',
    components: { TvBox, Schedule }
}
</script>

<style lang="scss">
.main {
    position: relative;
    background-color: $body-bg;
}

.coloors {
    display: block;
    // z-index: 100;
    width: 100%;
    background-color: orangered;
}
</style>