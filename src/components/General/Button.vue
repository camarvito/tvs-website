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
    color: var(--white);
    padding: 0.8rem 2rem;
    font-weight: bold;
    letter-spacing: 0.04rem;
    border: none;
    border-radius: 0.3rem;
    background-color: var(--green-1);
    outline: none;
    cursor: pointer;
}
</style>