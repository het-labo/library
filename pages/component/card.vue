<script setup>
    import '@/assets/css/labo/typography.scss'
</script>

<template>
    <core-header-page label="Component">Card</core-header-page>

    <div class="env-labo container">
        <ui-card-default 
            cover="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg"
            label="Digitale Marketing"
            title="Versterk je online zichtbaarheid met onze SEO audit"
            content="Dankzij onze grondige SEO audit identificeren we kritieke verbeterpunten en bieden praktische oplossingen, afgestemd op jouw budget en bedrijfsgrootte. Perfect voor bedrijven die hun online aanwezigheid willen versterken."
            :link="{ title: 'Ontdek onze SEO Audit', url: '/path/to/item' }"
        />
    </div>

</template>
