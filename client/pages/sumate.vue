<script setup lang="ts">
import { onMounted } from 'vue'
import { Trophy, Users, HeartHandshake, ArrowRight } from 'lucide-vue-next'

useHead({
  title: 'Sumate — Unidos por el Deporte',
  meta: [
    { name: 'description', content: 'Sumate a Unidos por el Deporte. Clubes, deportistas, familias, sponsors y donantes: hay un lugar para vos en el deporte correntino.' },
    { property: 'og:title', content: 'Sumate — Unidos por el Deporte' },
    { property: 'og:description', content: 'Hay un lugar para vos en el deporte correntino.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/og-image.png' },
  ],
})

const audiencias = [
  {
    id: 'clubes',
    icon: Trophy,
    titulo: 'Clubes y federaciones',
    subtitulo: 'Trabajamos codo a codo con ustedes',
    descripcion: [
      'Sabemos lo que cuesta sostener un club. Las horas invisibles, las rifas, los torneos armados con lo justo. No venimos a dar cátedra — venimos a sumar.',
      'Ofrecemos articulación con otros clubes y organismos, asistencia en la gestión de recursos, acompañamiento para mejoras de infraestructura y visibilidad para sus actividades y logros. Si necesitan apoyo técnico, legal o de comunicación, estamos.',
      'Queremos conocer su historia, sus necesidades y sus ideas. Cada club tiene algo único que aportar, y nuestra misión es que ese aporte se potencie.',
    ],
    cta: 'Escribinos y empecemos a trabajar juntos',
  },
  {
    id: 'deportistas',
    icon: Users,
    titulo: 'Deportistas y familias',
    subtitulo: 'El deporte cambia vidas — y la tuya puede ser la próxima',
    descripcion: [
      'Si practicás un deporte, si tu hijo o hija arranca en una disciplina, si estás buscando un espacio para moverte — esto es para vos.',
      'Trabajamos para que tengas acceso a mejores instalaciones, a becas deportivas, a competencias organizadas y a una red de apoyo que te acompañe en el camino. No importa si sos profesional o recién empezás: el deporte es tu derecho.',
      'Además, creemos que las familias son parte fundamental del deporte. Acompañar a un deportista es un acto de amor enorme, y queremos que esa tarea también tenga respaldo y reconocimiento.',
    ],
    cta: 'Contanos tu historia y cómo podemos ayudarte',
  },
  {
    id: 'sponsors',
    icon: HeartHandshake,
    titulo: 'Sponsors y donantes',
    subtitulo: 'Tu apoyo tiene impacto real y medible',
    descripcion: [
      'Invertir en deporte es invertir en salud, educación y cohesión social. Cada aporte — grande o pequeño — se traduce en canchas mejoradas, equipamiento para deportistas y programas de inclusión que cambian realidades.',
      'Trabajamos con transparencia total: rendición de cuentas, informes de impacto y seguimiento de cada recurso asignado. Sabemos que tu confianza se construye con resultados, y estamos comprometidos a demostrarlo.',
      'Ofrecemos distintas modalidades de colaboración: sponsoreo de eventos, donaciones puntuales, apadrinamiento de deportistas o clubes, y alianzas estratégicas de largo plazo. Encontremos juntos la forma que mejor se adapte a tus objetivos.',
    ],
    cta: 'Hablemos sobre cómo podés participar',
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
        Hay un lugar para vos
      </span>
      <h1 class="text-4xl md:text-5xl font-heading font-extrabold text-white dark:text-white leading-tight mb-4 reveal">
        <span class="text-light">Sumate</span>
      </h1>
      <p class="text-slate text-lg font-body leading-relaxed reveal">
        No importa quién seas ni de dónde vengas. Si creés en el poder del deporte para transformar vidas, acá tenés tu espacio.
      </p>
    </div>
  </SectionWrapper>

  <!-- Audience Sections -->
  <template v-for="(audiencia, index) in audiencias" :key="audiencia.id">
    <SectionWrapper :id="audiencia.id" :bg="index % 2 === 0 ? 'transparent' : 'light'">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        <!-- Icon + Title -->
        <div
          class="md:col-span-4 reveal"
          :class="index % 2 !== 0 ? 'md:order-2' : ''"
        >
          <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
               :class="index === 2 ? 'bg-accent/10' : 'bg-blue/10'">
            <component
              :is="audiencia.icon"
              class="w-8 h-8"
              :class="index === 2 ? 'text-accent' : 'text-light'"
              :stroke-width="1.5"
            />
          </div>
          <h2 class="text-2xl md:text-3xl font-heading font-bold text-dark dark:text-white mb-2">
            {{ audiencia.titulo }}
          </h2>
          <p class="text-accent font-body font-medium text-sm">
            {{ audiencia.subtitulo }}
          </p>
        </div>

        <!-- Content -->
        <div
          class="md:col-span-8 reveal"
          :class="index % 2 !== 0 ? 'md:order-1' : ''"
        >
          <div class="space-y-4 mb-8">
            <p
              v-for="(parrafo, pIndex) in audiencia.descripcion"
              :key="pIndex"
              class="text-slate font-body text-base leading-relaxed"
            >
              {{ parrafo }}
            </p>
          </div>
          <NuxtLink
            to="/contacto"
            class="inline-flex items-center gap-2 text-accent font-body font-semibold text-sm hover:gap-3 transition-all duration-200 group"
          >
            {{ audiencia.cta }}
            <ArrowRight class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </NuxtLink>
        </div>
      </div>
    </SectionWrapper>
  </template>

  <!-- Bottom CTA -->
  <SectionWrapper bg="dark">
    <div class="text-center max-w-xl mx-auto reveal">
      <h2 class="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
        Movemos Corrientes
      </h2>
      <p class="text-slate font-body mb-8">
        El deporte nos une. Y juntos, podemos hacer que llegue a cada rincón de la provincia.
      </p>
      <BaseButton to="/contacto" variant="primary">Escribinos</BaseButton>
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
