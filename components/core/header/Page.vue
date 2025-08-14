<script setup>
const props = defineProps({
    label: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <header>
        <div class="container">
            <div class="label" v-if="label">{{ label }}</div>
            <h1><slot /></h1>
        </div>
    </header>
</template>

<style scoped lang="scss">
header {
    padding: 1rem 0 2rem;

    .label {
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 1.4px;
        opacity: .5;
    }

    h1 {
        font-size: 2.4rem;
        line-height: 110%;
        display: inline-flex;
        align-items: center;
    }
}
</style>