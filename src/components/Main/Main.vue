<template>
    <div class="main page-container">
        <div class="page-container">
            <VideoFrame />
            <Schedule />
        </div>
    </div>
</template>

<script>
import VideoFrame from './VideoFrame'
import Schedule from './Schedule'

export default {
    name: 'Main',
    components: { VideoFrame, Schedule }
}
</script>

<style lang="scss">
.main {
    position: relative;
    background-color: var(--body-bg);
    transition-duration: 0.3s;
}
</style>
