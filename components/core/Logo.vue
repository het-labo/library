<script setup>
    const { theme } = defineProps({
        theme: {
            type: String,
            default: 'light'
        }
    })
</script>

<template>
    <a class="logo" href="#">
        <img 
            :src="theme === 'dark' ? '/images/logo-compact-dark.svg' : '/images/logo-compact.svg'"
            alt="Company logo" 
        />
        <span class="logo-tagline">Library</span>
    </a>
</template>

<style scoped lang="scss">
.logo {
    display: inline-flex;
    flex-direction: column;
    max-width: 80px;

    span {
        display: flex;
        justify-content: flex-end;

        font-family: 'Inter';
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
}
</style>