<script setup lang="ts">
import { onMounted } from 'vue'
import { CalendarDays } from 'lucide-vue-next'

useHead({
  title: 'Novedades — Unidos por el Deporte',
  meta: [
    { name: 'description', content: 'Noticias y novedades de la Fundación Unidos por el Deporte. Seguí de cerca nuestras acciones, eventos y logros.' },
    { property: 'og:title', content: 'Novedades — Unidos por el Deporte' },
    { property: 'og:description', content: 'Noticias y novedades del deporte correntino.' },
  ],
})

// Placeholder articles — ready to be replaced with Firestore data
const novedades = [
  {
    id: 1,
    fecha: 'Marzo 2026',
    titulo: 'La fundación lanza su sitio web',
    resumen: 'Después de meses de trabajo, presentamos nuestra plataforma digital. Un espacio para conectar al deporte correntino, compartir novedades y acercar la fundación a toda la comunidad. El sitio incluye información institucional, nuestros ejes de acción y un canal directo de contacto.',
    tags: ['Institucional', 'Comunicación'],
  },
  {
    id: 2,
    fecha: 'Mayo 2025',
    titulo: 'Aprobación oficial por la IGPJ de Corrientes',
    resumen: 'La Inspección General de Personas Jurídicas de Corrientes aprobó formalmente la Fundación Unidos por el Deporte mediante la Resolución Nº 000552/2025. Este reconocimiento legal nos habilita a operar formalmente, celebrar convenios y gestionar recursos para el desarrollo deportivo provincial.',
    tags: ['Legal', 'Hito'],
  },
  {
    id: 3,
    fecha: 'Noviembre 2024',
    titulo: 'Acta constitutiva firmada',
    resumen: 'El 8 de noviembre de 2024, en la ciudad de Corrientes, se firmó el acta constitutiva de la Fundación Unidos por el Deporte. Con la presencia del fundador Juan José López Desimoni y los miembros del Consejo de Administración, nació oficialmente una organización dedicada a transformar el deporte correntino.',
    tags: ['Institucional', 'Hito'],
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})
</script>

<template>
  <!-- Page Hero -->
  <SectionWrapper bg="dark">
    <div class="pt-12 md:pt-20 pb-4 text-center max-w-2xl mx-auto">
      <span class="inline-block text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent mb-4 reveal">
        Últimas noticias
      </span>
      <h1 class="text-4xl md:text-5xl font-heading font-extrabold text-white dark:text-white leading-tight mb-4 reveal">
        <span class="text-light">Novedades</span>
      </h1>
      <p class="text-slate text-lg font-body leading-relaxed reveal">
        Todo lo que está pasando en la fundación y el deporte correntino.
      </p>
    </div>
  </SectionWrapper>

  <!-- News Cards -->
  <SectionWrapper>
    <div class="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
      <article
        v-for="novedad in novedades"
        :key="novedad.id"
        class="p-6 md:p-8 rounded-2xl bg-white/5 dark:bg-white/[0.03] border border-white/10 dark:border-white/5 reveal"
      >
        <!-- Date -->
        <div class="flex items-center gap-2 mb-4">
          <CalendarDays class="w-4 h-4 text-slate" :stroke-width="1.5" />
          <time class="text-xs font-body font-semibold tracking-[0.15em] uppercase text-slate">
            {{ novedad.fecha }}
          </time>
        </div>

        <!-- Title -->
        <h2 class="text-xl md:text-2xl font-heading font-bold text-dark dark:text-white mb-3">
          {{ novedad.titulo }}
        </h2>

        <!-- Summary -->
        <p class="text-slate font-body text-base leading-relaxed mb-5">
          {{ novedad.resumen }}
        </p>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in novedad.tags"
            :key="tag"
            class="inline-block px-3 py-1 rounded-full text-xs font-body font-medium bg-blue/10 text-light"
          >
            {{ tag }}
          </span>
        </div>
      </article>
    </div>
  </SectionWrapper>

  <!-- Bottom CTA -->
  <SectionWrapper bg="light">
    <div class="text-center max-w-xl mx-auto reveal">
      <h2 class="text-xl md:text-2xl font-heading font-bold text-dark dark:text-white mb-4">
        Querés estar al día?
      </h2>
      <p class="text-slate font-body mb-8">
        Seguinos en redes sociales para no perderte ninguna novedad del deporte correntino.
      </p>
      <BaseButton to="/contacto" variant="primary">Contactanos</BaseButton>
    </div>
  </SectionWrapper>
</template>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.revealed {
  opacity: 1;
  transform: translateY(0);
}
</style>
