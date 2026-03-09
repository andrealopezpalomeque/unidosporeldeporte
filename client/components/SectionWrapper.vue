<template>
  <section :id="id" :class="['py-16 md:py-24 px-4', bgClass]">
    <div class="mx-auto max-w-[1080px]">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  id?: string
  bg?: 'transparent' | 'dark' | 'blue' | 'light'
}>(), {
  bg: 'transparent',
})

const bgClass = computed(() => {
  const map: Record<string, string> = {
    transparent: '',
    dark: 'bg-dark',
    blue: 'bg-blue',
    light: 'bg-light/10',
  }
  return map[props.bg] || ''
})
</script>
