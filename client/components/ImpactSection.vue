<template>
  <SectionWrapper id="impacto" bg="light">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <!-- Story -->
      <div>
        <p class="text-accent font-body font-semibold text-sm tracking-widest uppercase mb-3 reveal">
          Nuestra historia
        </p>
        <h2 class="font-heading font-bold text-3xl sm:text-4xl mb-6 reveal">
          Una fundación nacida del deporte correntino
        </h2>
        <p class="font-body text-slate leading-relaxed mb-4 reveal">
          Unidos por el Deporte nació el 8 de noviembre de 2024 con una convicción simple:
          el deporte en Corrientes tiene todo el potencial, pero necesita articulación,
          recursos y una voz institucional que lo represente.
        </p>
        <p class="font-body text-slate leading-relaxed reveal">
          Desde clubes barriales hasta federaciones provinciales, trabajamos para que cada
          correntino tenga acceso a la actividad física, la cultura deportiva y las
          oportunidades que el deporte genera.
        </p>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-2 gap-6">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          class="text-center p-6 rounded-2xl bg-white/5 dark:bg-white/[0.03] border border-white/10 dark:border-white/5 reveal"
        >
          <span class="block font-heading font-extrabold text-4xl sm:text-5xl text-light mb-2">
            {{ stat.number }}
          </span>
          <span class="font-body text-slate text-sm leading-snug">
            {{ stat.label }}
          </span>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
const stats = [
  { number: '200+', label: 'Clubes deportivos en Corrientes' },
  { number: '99', label: 'Años de duración institucional' },
  { number: '5', label: 'Ejes de acción simultáneos' },
  { number: '1', label: 'Objetivo: que el deporte llegue a todos' },
]
</script>
