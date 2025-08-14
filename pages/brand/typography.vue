<script setup>
    import '@/assets/css/labo/typography.scss'
</script>

<template>
    <core-header-page>Branding: Typography</core-header-page>
    
    <div class="env-labo container">
        <div class="flex flex-col gap-4 max-w-[1200px]">
            <h1>Manrope h1 80/92 700 -.04</h1>
            <h2>Manrope h2 64/74 700 -.04</h2>
            <h3>Manrope h3 48/58 700 -.02</h3>
            <h4>Manrope h4 40/44 700 -.04</h4>
            <h5>Manrope h5 28/36 700 -.04</h5>
            <h6>Manrope h6 20/26 700 -.04</h6>
            <label>Small label</label>
            <label class="label--md">Medium label</label>
            <p class="p-lead">Paragraph default lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur culpa voluptate illum vel laudantium saepe ab <a href="#">magni praesentium dolores</a> ex tempore atque, consequuntur soluta pariatur deleniti? Saepe, est. Atque, ipsum?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur culpa voluptate illum vel laudantium saepe ab magni praesentium dolores ex tempore atque, consequuntur <a href="#">soluta pariatur</a> deleniti? Saepe, est. Atque, ipsum? Consequatur culpa voluptate illum vel laudantium saepe ab magni praesentium dolores ex tempore atque.</p>
            <a href="#">Anchor default</a>
        </div>
    </div>
</template>