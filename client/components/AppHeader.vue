<template>
  <header
    :class="[
      'sticky top-0 z-50 transition-shadow duration-300',
      scrolled ? 'shadow-md' : '',
      'bg-dark/95 backdrop-blur-sm border-b border-white/5',
      'dark:bg-dark/95',
      'light:bg-white/95 light:border-dark/5',
    ]"
  >
    <nav class="mx-auto max-w-[1080px] flex items-center justify-between px-4 py-3">
      <!-- Logo -->
      <FullLogo
        layout="horizontal"
        :variant="isDark ? 'dark' : 'light'"
        :icon-size="32"
        :wordmark-width="130"
      />

      <!-- Desktop navigation -->
      <ul class="hidden md:flex items-center gap-6">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="font-body text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 dark:text-white/70 dark:hover:text-white"
            active-class="!text-light"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Right actions -->
      <div class="flex items-center gap-3">
        <!-- Dark/Light mode toggle -->
        <button
          @click="toggleDarkMode"
          class="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
          :aria-label="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
        >
          <Sun v-if="isDark" :size="20" />
          <Moon v-else :size="20" />
        </button>

        <!-- Mobile hamburger -->
        <button
          @click="mobileOpen = !mobileOpen"
          class="md:hidden p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
          :aria-label="mobileOpen ? 'Cerrar menú' : 'Abrir menú'"
          :aria-expanded="mobileOpen"
        >
          <X v-if="mobileOpen" :size="22" />
          <Menu v-else :size="22" />
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileOpen" class="md:hidden border-t border-white/5 bg-dark/98 backdrop-blur-sm">
        <ul class="flex flex-col gap-1 px-4 py-4">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="block py-2.5 px-3 rounded-xl font-body text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200"
              active-class="!text-light !bg-light/10"
              @click="mobileOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { Sun, Moon, Menu, X } from 'lucide-vue-next'

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/quienes-somos', label: 'Quienes Somos' },
  { to: '/que-hacemos', label: 'Que Hacemos' },
  { to: '/sumate', label: 'Sumate' },
  { to: '/novedades', label: 'Novedades' },
  { to: '/contacto', label: 'Contacto' },
]

const mobileOpen = ref(false)
const scrolled = ref(false)
const isDark = ref(true)

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')

  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 10
  })
})

function toggleDarkMode() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}
</script>
