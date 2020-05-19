<template>
    <video
        ref="videoPlayer"
        class="video-js video__style vjs-big-play-centered"
        controls
        preload="auto"
    >
        <source
            src="https://593d7fe3c9b0d.streamlock.net:443/tvsertao/mp4:tvsertao_720p/playlist.m3u8"
            type="application/x-mpegURL"
            label="720p"
            res="720"
        />
        <source
            src="https://593d7fe3c9b0d.streamlock.net:443/tvsertao/mp4:tvsertao_360p/playlist.m3u8"
            type="application/x-mpegURL"
            label="360p"
            res="360"
        />
        <source
            src="https://593d7fe3c9b0d.streamlock.net:443/tvsertao/mp4:tvsertao_240p/playlist.m3u8"
            type="application/x-mpegURL"
            label="240p"
            res="240"
        />
        <source
            src="https://593d7fe3c9b0d.streamlock.net:443/tvsertao/mp4:tvsertao_160p/playlist.m3u8"
            type="application/x-mpegURL"
            label="160p"
            res="160"
        />
        <source
            src="https://593d7fe3c9b0d.streamlock.net:443/tvsertao/mp4:tvsertao_480p/playlist.m3u8"
            type="application/x-mpegURL"
            label="360p"
            res="360"
        />
        <source
            src="https://593d7fe3c9b0d.streamlock.net:443/tvsertao/mp4:tvsertao_576p/playlist.m3u8"
            type="application/x-mpegURL"
            label="576p"
            res="576"
        />
        <p class="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading
            to a web browser that
            <a href="https://videojs.com/html5-video-support/" target="_blank"
                >supports HTML5 video</a
            >
        </p>
    </video>
</template>

<script>
import videojs from 'video.js'
export default {
    name: 'VideoPlayer',
    props: {
        options: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            // videoOptions: {
            //     autoplay: true,
            //     controls: true
            // }
        }
    },
    mounted() {
        this.player = videojs(
            this.$refs.videoPlayer,
            this.options,
            function onPlayerReady() {
                console.log('onPlayerReady', this)
            }
        )
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    }
}
</script>

<style lang="scss">
.video__style {
    margin: 0 !important;
    width: 100% !important;
    border-radius: 1rem !important;
    height: 40rem !important;

    @include respond(phone) {
        height: 25rem !important;
    }
}
</style>
