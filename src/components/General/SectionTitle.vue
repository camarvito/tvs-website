<template>
    <div class="section-title">
        <span class="text" :alignment="alignment">{{ title }}</span>
    </div>
</template>

<script>
export default {
    name: 'SectionTitle',
    props: ['title', 'alignment']
}
</script>

<style lang="scss">
.section-title {
    align-self: flex-start;
    font-size: 2.4rem;
    font-weight: 600;
    color: $black;
    text-transform: uppercase;
}

.text[alignment*='left'] {
    padding: 1rem 6rem 1rem 0;
    border-bottom: 2px solid #219653;
}

.text[alignment*='center'] {
    padding: 1rem 3rem;
    border-bottom: 2px solid #219653;
}
</style>