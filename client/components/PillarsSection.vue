<template>
  <SectionWrapper id="pilares">
    <p class="text-accent font-body font-semibold text-sm tracking-widest uppercase mb-3 reveal">
      Que hacemos
    </p>
    <h2 class="font-heading font-bold text-3xl sm:text-4xl mb-4 reveal">
      Conectamos lo disperso, fortalecemos lo que existe
    </h2>
    <p class="text-slate font-body text-lg max-w-2xl mb-12 reveal">
      Cinco ejes de trabajo para transformar el deporte en Corrientes.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(pillar, i) in pillars"
        :key="i"
        class="group rounded-2xl border border-white/10 dark:border-white/5 bg-white/5 dark:bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(126,150,190,0.1)] reveal"
      >
        <div class="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center mb-4 text-light transition-colors duration-300 group-hover:bg-blue/20">
          <component :is="pillar.icon" :size="24" />
        </div>
        <h3 class="font-heading font-bold text-lg mb-2">{{ pillar.title }}</h3>
        <p class="font-body text-slate text-sm leading-relaxed">{{ pillar.description }}</p>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { Handshake, Building2, HeartPulse, Wallet, Scale } from 'lucide-vue-next'

const pillars = [
  {
    icon: Handshake,
    title: 'Articulacion institucional',
    description: 'Coordinamos la accion entre clubes, federaciones, gobierno y educacion para que el deporte avance de manera integrada.',
  },
  {
    icon: Building2,
    title: 'Infraestructura y alto rendimiento',
    description: 'Disenamos y optimizamos instalaciones deportivas, incluyendo un centro de alto rendimiento para la provincia.',
  },
  {
    icon: HeartPulse,
    title: 'Inclusion y acceso',
    description: 'Incorporamos a mujeres, personas con discapacidad, adultos mayores y jovenes a todas las disciplinas deportivas.',
  },
  {
    icon: Wallet,
    title: 'Gestion de recursos',
    description: 'Administramos fondos publicos y privados para canchas, equipamiento, capacitacion y competencias.',
  },
  {
    icon: Scale,
    title: 'Legislacion y politica deportiva',
    description: 'Elaboramos proyectos de ley y propuestas de reforma para una politica deportiva provincial a largo plazo.',
  },
]
</script>
