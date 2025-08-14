<script setup>
    import '@/assets/css/labo/typography.scss'
</script>

<template>
    <core-header-page label="Component">Button</core-header-page>

    <div class="env-labo container">
        <div class="flex flex-col gap-4 items-start">
            <ui-button-default class="btn--lg">Primary button large</ui-button-default>
            <ui-button-default class="btn--md">Primary button medium</ui-button-default>
            <ui-button-default class="">Primary button default</ui-button-default>
            <ui-button-default class="btn--2nd">Secondary button default</ui-button-default>
        </div>
    </div>

</template>
