<script setup>
definePageMeta({
    // SEO & Head
    title: 'Page Title',
  description: 'Page description',
  keywords: ['tag1', 'tag2'],
  
  // Layout
  layout: 'test',
  //layoutTransition: { name: 'slide' },
  
  // Page Transition
  //pageTransition: { name: 'fade' },
  
  // Middleware
  //middleware: ['auth', 'admin'],
  
  // Route
  alias: ['/old-path', '/legacy'],
  //redirect: '/new-path',
  
  // Keep alive
  keepalive: true,
  
  // Validate route params
  //validate: (route) => route.params.id !== 'admin',
  
  // Custom properties (accessible via route.meta)
  //requiresAuth: true,
  //role: 'admin',
  theme: 'dark'
});

// Actually set the title
useHead({
  title: 'Page Title',
  meta: [
    { name: 'description', content: 'Page description' }
  ]
})

useSeoMeta({
  title: 'SEO Page Title',
  description: 'SEO Page description',
  ogTitle: 'SEO Page Title',
  ogDescription: 'SEO Page description'
})


</script>

<template>

    <div class="container">
        <h1>Test page</h1>

        <div class="flex flex-col gap-4 mt-12">
            <h1>Header 1</h1>
            <h2>Header 2</h2>
            <h3>Header 3</h3>
            <h4>Header 4</h4>
            <h5>Header 5</h5>
            <h6>Header 6</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur culpa voluptate illum vel laudantium saepe ab magni praesentium dolores ex tempore atque, consequuntur soluta pariatur deleniti? Saepe, est. Atque, ipsum?</p>
        </div>
    </div>
    
</template>