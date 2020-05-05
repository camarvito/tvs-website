<template>
    <button class="btn" @click="action">{{ title }}</button>
</template>

<script>
export default {
    name: 'Button',
    props: ['title', 'action']
}
</script>

<style lang="scss">
.btn {
    color: $white;
    padding: 0.8rem 2rem;
    font-weight: bold;
    border: none;
    border-radius: 0.3rem;
    background-color: $btn-green;
    outline: none;
    cursor: pointer;
}
</style>