<template>
  <footer class="bg-dark border-t border-white/5">
    <div class="mx-auto max-w-[1080px] px-4 py-12 md:py-16">
      <!-- Top row: logo + tagline + social -->
      <div class="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">
        <!-- Logo and tagline -->
        <div class="flex flex-col items-center md:items-start gap-3">
          <FullLogo
            layout="horizontal"
            variant="dark"
            :icon-size="36"
            :wordmark-width="140"
          />
          <p class="font-heading text-sm text-light/80 tracking-wide">
            El deporte nos une
          </p>
        </div>

        <!-- Social links placeholder -->
        <div class="flex items-center gap-4">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2.5 rounded-full bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
            :aria-label="social.label"
          >
            <component :is="social.icon" :size="18" />
          </a>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-white/10 pt-6">
        <!-- Legal info -->
        <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div class="space-y-1">
            <p class="text-xs text-white/40 font-body">
              Fundacion Unidos por el Deporte — Res. N.o 000552/2025 (IGPJ Corrientes)
            </p>
            <p class="text-xs text-white/30 font-body">
              La Cruz 3149, Corrientes Capital — Corrientes, Argentina
            </p>
          </div>
          <p class="text-xs text-white/30 font-body">
            &copy; {{ currentYear }} Fundacion Unidos por el Deporte
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Instagram, Facebook, Mail } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()

const socialLinks = [
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'Facebook', href: '#', icon: Facebook },
  { label: 'Email', href: 'mailto:contacto@unidosporeldeporte.org', icon: Mail },
]
</script>
