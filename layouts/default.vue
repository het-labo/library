<template>
    <Dev msg="You are in layouts/default.vue" />
    
    <header>
        <NuxtLink to="/">
            <CoreLogo theme="dark" />
        </NuxtLink>
    </header>

    <main class="flex">
        <aside>
            <CoreNavMain />
        </aside>

        <div class="content">
            <slot />
        </div>
    </main>
</template>

<style scoped>
header {
    padding: 1rem 2rem;
    border-bottom: 1px solid #E5E5E5;
}
aside {
    position: relative;
    min-width: 320px;
    max-width: 400px;
}
.content {
    position: relative;
    padding: 2rem;
    border-left: 1px solid #E5E5E5;

    width: 100%;
    min-height: 50vh;
}
</style>