<template>
  <NuxtLink to="/" :class="containerClass" aria-label="Unidos por el Deporte - Inicio">
    <LogoIcon
      :size="iconSize"
      :color="iconColor"
    />
    <LogoWordmark
      :width="wordmarkWidth"
      :variant="variant"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  layout?: 'horizontal' | 'vertical'
  variant?: 'dark' | 'light'
  iconSize?: string | number
  wordmarkWidth?: string | number
}>(), {
  layout: 'horizontal',
  variant: 'dark',
  iconSize: 40,
  wordmarkWidth: 160,
})

const containerClass = computed(() => [
  'flex items-center gap-2 no-underline',
  props.layout === 'vertical' ? 'flex-col' : 'flex-row',
])

const iconColor = computed(() =>
  props.variant === 'dark' ? 'light' as const : 'blue' as const
)
</script>
