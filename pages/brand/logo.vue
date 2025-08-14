<script setup>
// Toggle theme
const isDark = ref(false)

// Watch for changes and apply to HTML
watch(isDark, (newValue) => {
  document.documentElement.classList.toggle('dark', newValue)
})

// Or apply on mount
onMounted(() => {
  // Check localStorage, system preference, etc.
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.classList.toggle('dark', prefersDark)
})

definePageMeta({
    
});
</script>


<template>
    <core-header-page>Branding: Logo</core-header-page>

    <div class="container">
        <div class="flex flex-col gap-4 items-start">
            <img src="/images/logo-old.svg" alt="Company logo" />
            <img src="/images/logo.svg" alt="Company logo" />
            <img src="/images/logo-compact.svg" alt="Company logo" />
            <img src="/images/logo-compact-dark.svg" alt="Company logo" />
        </div>
    </div>

</template>