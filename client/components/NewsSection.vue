<template>
  <SectionWrapper id="novedades">
    <div class="flex items-end justify-between mb-10">
      <div>
        <p class="text-accent font-body font-semibold text-sm tracking-widest uppercase mb-3 reveal">
          Novedades
        </p>
        <h2 class="font-heading font-bold text-3xl sm:text-4xl reveal">
          Ultimas noticias
        </h2>
      </div>
      <NuxtLink
        to="/novedades"
        class="hidden sm:inline-flex items-center gap-1 text-light font-body font-semibold text-sm hover:gap-2 transition-all duration-200 reveal"
      >
        Ver todas
        <ArrowRight :size="16" />
      </NuxtLink>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <article
        v-for="(item, i) in news"
        :key="i"
        class="rounded-2xl border border-white/10 dark:border-white/5 bg-white/5 dark:bg-white/[0.03] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(126,150,190,0.1)] reveal"
      >
        <div class="p-6">
          <time class="font-body text-xs text-slate uppercase tracking-wider">
            {{ item.date }}
          </time>
          <h3 class="font-heading font-bold text-lg mt-2 mb-3">{{ item.title }}</h3>
          <p class="font-body text-slate text-sm leading-relaxed">{{ item.excerpt }}</p>
        </div>
      </article>
    </div>

    <NuxtLink
      to="/novedades"
      class="sm:hidden inline-flex items-center gap-1 text-light font-body font-semibold text-sm mt-8 hover:gap-2 transition-all duration-200"
    >
      Ver todas
      <ArrowRight :size="16" />
    </NuxtLink>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const news = [
  {
    date: 'Marzo 2026',
    title: 'La fundacion lanza su sitio web',
    excerpt: 'Presentamos nuestra nueva plataforma digital para acercar informacion, novedades y oportunidades a toda la comunidad deportiva correntina.',
  },
  {
    date: 'Mayo 2025',
    title: 'Aprobacion oficial por la IGPJ',
    excerpt: 'La Inspeccion General de Personas Juridicas de Corrientes aprobo formalmente a la fundacion mediante Resolucion N.o 000552/2025.',
  },
  {
    date: 'Noviembre 2024',
    title: 'Acta constitutiva firmada',
    excerpt: 'El 8 de noviembre de 2024, Juan Jose Lopez Desimoni fundo oficialmente Unidos por el Deporte junto al consejo de administracion.',
  },
]
</script>
