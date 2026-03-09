<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="buttonClass"
    v-bind="$attrs"
  >
    <slot />
  </NuxtLink>
  <a
    v-else-if="href"
    :href="href"
    :class="buttonClass"
    v-bind="$attrs"
  >
    <slot />
  </a>
  <button
    v-else
    :type="type"
    :class="buttonClass"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'outline'
  to?: string
  href?: string
  type?: string
}>(), {
  variant: 'primary',
  type: 'button',
})

const buttonClass = computed(() => {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-body font-semibold text-sm tracking-wide transition-all duration-200 ease-in-out cursor-pointer'

  const variants: Record<string, string> = {
    primary: 'bg-accent text-dark hover:brightness-110 hover:shadow-lg',
    secondary: 'bg-blue text-white hover:brightness-110 hover:shadow-lg',
    outline: 'border-2 border-blue text-blue hover:bg-blue/10 dark:text-light dark:border-light dark:hover:bg-light/10',
  }

  return [base, variants[props.variant]].join(' ')
})
</script>
