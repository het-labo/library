<script setup>
import '@/assets/css/labo/bundle.scss'

const colors = ref([
  {
    name: 'Light',
    class: 'bg-light',
    textClass: '',
    hex: '#F6F6F6',
    rgb: '246, 246, 246, 100%',
    hsl: '0°, 0%, 96%',
    hsb: '0°, 0%, 96%'
  },
  {
    name: 'Dark',
    class: 'bg-dark',
    textClass: 'text-white',
    hex: '#233342',
    rgb: '35, 51, 66, 100%',
    hsl: '210°, 31%, 20%',
    hsb: '210°, 47%, 26%'
  },
  {
    name: 'Orange',
    class: 'bg-orange',
    textClass: '',
    hex: '#FFAF23',
    rgb: '255, 175, 35, 100%',
    hsl: '39°, 100%, 57%',
    hsb: '39°, 86%, 100%'
  },
  {
    name: 'Green Gradient',
    class: 'bg-gradient-green',
    textClass: '',
    hex: '#17FF95 - #62FFB7'
  },
  {
    name: 'Blue Gradient',
    class: 'bg-gradient-blue',
    textClass: 'text-white',
    hex: '#00417Es - #1C51BC'
  }
])
</script>

<template>
  <core-header-page label="Branding">Colors</core-header-page>

  <div class="env-labo container">
    <div class="flex flex-row flex-wrap gap-8">
      <div
        v-for="color in colors" 
        :key="color.name"
        class="flex flex-col flex-1"
      >
        <div :class="['flex items-center justify-center py-12 px-12', color.class]">
          <h5 :class="color.textClass">{{ color.name }}</h5>
        </div>
        <header class="p-4">
          <div class="flex flex-col gap-2">
            <div class="flex flex-col">
              <div class="label">hex</div>
              <div>{{ color.hex }}</div>
            </div>
            <div v-if="color.rgb" class="flex flex-col">
              <div class="label">rgb</div>
              <div>{{ color.rgb }}</div>
            </div>
            <div v-if="color.hsl" class="flex flex-col">
              <div class="label">hsl</div>
              <div>{{ color.hsl }}</div>
            </div>
            <div v-if="color.hsb" class="flex flex-col">
              <div class="label">hsb</div>
              <div>{{ color.hsb }}</div>
            </div>
          </div>
        </header>
      </div>
    </div>
  </div>
</template>