<template>
  <header
    :class="[
      'sticky top-0 z-50 transition-all duration-300',
      scrolled ? 'shadow-sm border-b border-dark/8' : 'border-b border-transparent',
      'bg-white/95 backdrop-blur-sm',
    ]"
  >
    <nav class="mx-auto max-w-[1080px] flex items-center justify-between px-4 py-3">
      <!-- Logo -->
      <FullLogo
        layout="horizontal"
        variant="light"
        :icon-size="32"
        :wordmark-width="130"
      />

      <!-- Desktop navigation -->
      <ul class="hidden md:flex items-center gap-6">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="font-body text-sm font-medium text-slate hover:text-dark transition-colors duration-200"
            active-class="!text-blue"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Right actions -->
      <div class="flex items-center gap-3">
        <!-- Contacto CTA (desktop) -->
        <NuxtLink
          to="/contacto"
          class="hidden md:inline-flex items-center font-body text-sm font-semibold bg-accent text-dark px-5 py-2 rounded-full transition-opacity duration-200 hover:opacity-90"
        >
          Contacto
        </NuxtLink>

        <!-- Mobile hamburger -->
        <button
          @click="mobileOpen = !mobileOpen"
          class="md:hidden p-2 rounded-full text-slate hover:text-dark hover:bg-dark/5 transition-all duration-200"
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
      <div v-if="mobileOpen" class="md:hidden border-t border-dark/8 bg-white/98 backdrop-blur-sm">
        <ul class="flex flex-col gap-1 px-4 py-4">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="block py-2.5 px-3 rounded-xl font-body text-sm font-medium text-slate hover:text-dark hover:bg-dark/5 transition-all duration-200"
              active-class="!text-blue !bg-blue/8"
              @click="mobileOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
          <li class="pt-1">
            <NuxtLink
              to="/contacto"
              class="block py-2.5 px-3 rounded-full font-body text-sm font-semibold bg-accent text-dark text-center transition-opacity duration-200 hover:opacity-90"
              @click="mobileOpen = false"
            >
              Contacto
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/quienes-somos', label: 'Quiénes Somos' },
  { to: '/que-hacemos', label: 'Qué Hacemos' },
  { to: '/sumate', label: 'Sumate' },
  { to: '/novedades', label: 'Novedades' },
]

const mobileOpen = ref(false)
const scrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 10
  })
})
</script>
