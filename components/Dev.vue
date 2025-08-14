<script setup>
    const { msg } = defineProps({
        msg: {
            type: String,
            default: 'light'
        }
    })
</script>

<template>
    <div class="dev-msg">
        <div>{{ msg }}</div>
    </div>
</template>

<style scoped>
.dev-msg {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem 2rem;
    background: linear-gradient(45deg, #17FF95 0%, #62FFB7 100%);
    color: #000;
}
</style>