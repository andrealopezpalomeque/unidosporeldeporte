<template>
  <SectionWrapper id="sumate">
    <div class="text-center mb-12">
      <p class="text-accent font-body font-semibold text-sm tracking-widest uppercase mb-3 reveal">
        Sumate
      </p>
      <h2 class="font-heading font-bold text-3xl sm:text-4xl mb-4 reveal">
        Hay un lugar para vos
      </h2>
      <p class="text-slate font-body text-lg max-w-xl mx-auto reveal">
        No importa desde dónde vengas: si creés en el deporte, ya somos equipo.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <NuxtLink
        v-for="(card, i) in cards"
        :key="i"
        to="/sumate"
        class="group rounded-2xl border border-white/10 dark:border-white/5 bg-white/5 dark:bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(126,150,190,0.1)] reveal"
      >
        <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 text-accent transition-colors duration-300 group-hover:bg-accent/20">
          <component :is="card.icon" :size="24" />
        </div>
        <h3 class="font-heading font-bold text-lg mb-2">{{ card.title }}</h3>
        <p class="font-body text-slate text-sm leading-relaxed mb-4">{{ card.description }}</p>
        <span class="inline-flex items-center gap-1 text-light font-body font-semibold text-sm group-hover:gap-2 transition-all duration-200">
          Conocé más
          <ArrowRight :size="16" />
        </span>
      </NuxtLink>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { Trophy, Users, HeartHandshake, ArrowRight } from 'lucide-vue-next'

const cards = [
  {
    icon: Trophy,
    title: 'Clubes y federaciones',
    description: 'Trabajamos codo a codo con ustedes. Conocemos sus desafíos y ofrecemos herramientas concretas para fortalecerlos.',
  },
  {
    icon: Users,
    title: 'Deportistas y familias',
    description: 'El deporte cambia vidas. Acompañamos a quienes compiten, entrenan y sueñan con ir más lejos.',
  },
  {
    icon: HeartHandshake,
    title: 'Sponsors y donantes',
    description: 'Tu apoyo tiene impacto real. Objetivos claros, métricas de resultado y una asociación que vale la pena.',
  },
]
</script>
