<script setup>
const props = defineProps({
    icon: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <button class="btn">
        <span v-if="icon">{{ icon }}</span>
        <span><slot /></span>
    </button>
</template>

<style scoped lang="scss">
button,
.btn {
    position: relative;

    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;

    padding: 12px 24px;
    
    background-color: #FFAF23;
    color: #414651;

    border-radius: 12px;

    font-family: 'Manrope', sans-serif;
    font-size: 16px;
    font-weight: 600;

    transition: all .25s ease-in-out;

    &:hover {
        background-color: #ffc150;
        color: #000000;
    }
}

.btn {
    &--lg {
        padding: 16px 24px;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: -.02em;
    }

    &--md {
        padding: 14px 24px;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: -.02em;
    }

    &--2nd {
        background: none;
        background-color: #FFF;
        border: 1px solid #D5D7DA;

        box-shadow: inset 0 -2px 0 0 #FAFAFA, 0 1px 2px 0 rgba(10, 13, 18, .05);

        &:hover {
            background-color: #FBFBFB;
            color: #000000;
            box-shadow: none;
            border-color: #333;
        }
    }
}
</style>