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
    background-color: var(--body-bg);
    transition-duration: 0.3s;
}
</style>