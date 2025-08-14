<script setup>
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from 'vue'

const route = useRoute()
const router = useRouter()

// List of valid slugs (could be imported from a config or generated)
const validSlugs = [
    ['button', 'default'],
    ['button', 'icon'],
    ['foo', 'bar', 'test'],
    // Add more valid paths as arrays
]

// Ensure slug is always an array
const slug = Array.isArray(route.params.slug)
    ? route.params.slug
    : route.params.slug
        ? [route.params.slug]
        : []

// Check if the slug is valid
const isValid = validSlugs.some(valid => 
    valid.length === slug.length && valid.every((v, i) => v === slug[i])
)

onMounted(() => {
    if (!isValid) {
        // Redirect to 404 if slug is not valid
        router.replace('/404')
    }
})
</script>

<template>
    <div v-if="isValid">
        <h1>Component: {{ slug.join(' / ') }}</h1>
        <!-- Your component logic here -->
    </div>
</template>