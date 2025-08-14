<template>
    <ClientOnly>
        <div ref="root" class="my-widget">
            <div class="filters">
                <button data-filter="all" aria-pressed="false">All</button>
                <button data-filter="foo" aria-pressed="false">Foo</button>
                <button data-filter="bar" aria-pressed="false">Bar</button>
                <button data-filter="lorem" aria-pressed="false">Lorem</button>
                <button data-filter="ipsum" aria-pressed="false">Ipsum</button>
                <button data-filter="test" aria-pressed="false">Test</button>
                <button data-filter-mode aria-pressed="false" title="Toggle AND/OR">AND</button>
                <input data-filter-search type="search" placeholder="Search cards…" aria-label="Search cards">
            </div>
            <div data-filter-count aria-live="polite" role="status"></div>
            <div data-filter-items>
                <div data-tags="foo bar lorem ipsum" data-filter-item>One red apple (foo, bar, lorem, ipusm)</div>
                <div data-tags="foo, lorem" data-filter-item>Two green pears (foo, lorem)</div>
                <div data-tags="foo" data-filter-item>Three blue berries (foo)</div>
                <div data-tags="bar" data-filter-item>Three blue berries (bar)</div>
                <div data-tags="ipsum" data-filter-item>Three blue berries (ipsum)</div>
                <div data-tags="test" data-filter-item>Test (test)</div>
            </div>
        </div>
    </ClientOnly>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const root = ref<HTMLElement|null>(null)

onMounted(() => {
    // load CSS + JS once (from /public)
    const ensure = (sel: string, make: () => HTMLElement) => {
        if (!document.querySelector(sel)) document.head.appendChild(make())
    }

    ensure('link[data-my-widget]', () => {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = '/widgets/TagFilter/style.css'
        link.setAttribute('data-my-widget', '')
        return link
    })

    ensure('script[data-my-widget]', () => {
        const s = document.createElement('script')
        s.src = '/widgets/TagFilter/script.js'
        s.defer = true
        s.setAttribute('data-my-widget', '')
        return s
    })

    // If your JS exposes a global init function, call it here:
    // @ts-ignore
    if (window.myWidgetInit && root.value) window.myWidgetInit(root.value)
})
</script>