<template>
    <div class="partners">
        <SectionTitle
            style="margin-top: 15rem; text-align: center;"
            title="Patrocinadores"
            alignment="center"
        />
        <div class="aa page-container" style="margin-top: 3rem;">
            <div class="bb">A</div>
        </div>
        <div class="cactus__container">
            <svg style="height: 90px; width: 90px;">
                <use xlink:href="@/assets/svg/cacto-mini.svg#cactus" />
            </svg>
            <svg style="height: 280px;
    width: 270px;">
                <use xlink:href="@/assets/svg/cacto.svg#cactus" />
            </svg>
        </div>
    </div>
</template>

<script>
import SectionTitle from '../General/SectionTitle'

export default {
    components: { SectionTitle }
}
</script>

<style lang="scss">
.aa {
    display: flex;
    justify-content: center;
    margin-bottom: 10rem;
}

.bb {
    height: 10rem;
    width: 100%;
    background-color: black;
}

.cactus__container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 3rem;
}
</style>