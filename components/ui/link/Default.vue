<script setup>
const props = defineProps({
    icon: {
        type: String,
        default: '⭐' // Default value for icon
    },
    title: {
        type: String,
        default: 'Default link'
    }
})
</script>

<template>
    <a href="">{{ props.title }}</a>
</template>

<style scoped lang="scss">
a {
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 1px;
    text-decoration-color: rgb(57, 57, 255);
    color: rgb(57, 57, 255);
    font-family: 'Inter', sans-serif;
    line-height: 1.1;

    &:hover {
        text-decoration-thickness: 2px;
    }
}
</style>