<script setup lang="ts">
import { onMounted } from 'vue'
import { Handshake, Building2, HeartPulse, Wallet, Scale } from 'lucide-vue-next'

useHead({
  title: 'Qué Hacemos — Unidos por el Deporte',
  meta: [
    { name: 'description', content: 'Conocé los 5 ejes de acción de la Fundación Unidos por el Deporte: articulación, infraestructura, inclusión, recursos y legislación deportiva.' },
    { property: 'og:title', content: 'Qué Hacemos — Unidos por el Deporte' },
    { property: 'og:description', content: 'Los 5 ejes de acción que guían nuestro trabajo por el deporte correntino.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/og-image.png' },
  ],
})

const pilares = [
  {
    id: 'articulacion',
    icon: Handshake,
    titulo: 'Articulación institucional',
    descripcion: [
      'Creemos que el deporte correntino no necesita más esfuerzos aislados — necesita conexión. Nuestra fundación trabaja como puente entre clubes, federaciones, instituciones educativas, organismos gubernamentales y el sector privado para que las acciones se potencien mutuamente.',
      'Facilitamos mesas de trabajo, acuerdos interinstitucionales y proyectos colaborativos donde cada actor aporta lo que mejor sabe hacer. Cuando un club necesita apoyo técnico, lo conectamos con quien puede darlo. Cuando una federación necesita visibilidad, la acercamos a los medios y la comunidad.',
      'El objetivo es simple: que nadie trabaje solo y que los recursos que ya existen se aprovechen mejor. La articulación no es burocracia — es inteligencia colectiva.',
    ],
  },
  {
    id: 'infraestructura',
    icon: Building2,
    titulo: 'Infraestructura y alto rendimiento',
    descripcion: [
      'Corrientes tiene talento deportivo de sobra, pero muchas veces falta el espacio físico para que ese talento se desarrolle. Trabajamos en el diseño, planificación y optimización de instalaciones deportivas — desde canchas barriales hasta un futuro centro de alto rendimiento provincial.',
      'No se trata solo de construir: se trata de pensar los espacios de manera estratégica. Dónde hace falta una pista de atletismo, qué pileta necesita renovación, cómo adaptar un gimnasio para personas con discapacidad. Cada metro cuadrado cuenta.',
      'Nuestro horizonte es ambicioso: un centro de alto rendimiento que le permita a los deportistas correntinos entrenarse en condiciones profesionales sin tener que irse de la provincia.',
    ],
  },
  {
    id: 'inclusion',
    icon: HeartPulse,
    titulo: 'Inclusión y acceso',
    descripcion: [
      'El deporte es un derecho, no un privilegio. Trabajamos para que mujeres, personas con discapacidad, adultos mayores, jóvenes en situación de vulnerabilidad y comunidades rurales tengan acceso real a la práctica deportiva.',
      'Esto implica eliminar barreras: económicas, geográficas, culturales y de infraestructura. Promovemos programas de becas deportivas, transporte a competencias, adaptación de espacios y capacitación de entrenadores en perspectiva inclusiva.',
      'Cada persona que se suma a una cancha, una pileta o un gimnasio es una victoria. Y cada barrera que derribamos nos acerca a un deporte que realmente sea de todos.',
    ],
  },
  {
    id: 'recursos',
    icon: Wallet,
    titulo: 'Gestión de recursos',
    descripcion: [
      'Conseguir recursos es solo la mitad del trabajo — administrarlos de manera transparente y eficiente es la otra. Gestionamos fondos públicos y privados para que lleguen donde más impacto generan: canchas, equipamiento, becas, formación y competencias.',
      'Trabajamos con criterios claros de asignación, rendición de cuentas y seguimiento de resultados. Cada peso invertido tiene un destino definido y un impacto medible. No prometemos lo que no podemos cumplir.',
      'Además, ayudamos a clubes y organizaciones deportivas a mejorar su propia gestión de recursos, brindando herramientas y acompañamiento para que sean más sustentables a lo largo del tiempo.',
    ],
  },
  {
    id: 'legislacion',
    icon: Scale,
    titulo: 'Legislación y política deportiva',
    descripcion: [
      'El deporte necesita un marco legal que lo sostenga y lo proyecte. Trabajamos en la elaboración de propuestas legislativas, reformas normativas y políticas públicas que fortalezcan el sistema deportivo correntino a largo plazo.',
      'Esto incluye desde la actualización de leyes provinciales de deporte hasta la creación de incentivos fiscales para empresas que inviertan en infraestructura deportiva, pasando por normativas de accesibilidad y protocolos de seguridad en eventos.',
      'Nuestro enfoque es técnico y participativo: construimos las propuestas con los actores del deporte — no desde un escritorio, sino desde las canchas, los clubes y las necesidades reales.',
    ],
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
        Nuestros ejes de acción
      </span>
      <h1 class="text-4xl md:text-5xl font-heading font-extrabold text-white dark:text-white leading-tight mb-4 reveal">
        Qué <span class="text-light">hacemos</span>
      </h1>
      <p class="text-slate text-lg font-body leading-relaxed mb-8 reveal">
        Cinco líneas de trabajo que guían cada acción de la fundación. Todas conectadas, todas orientadas a transformar el deporte correntino.
      </p>

      <!-- Anchor links -->
      <nav class="flex flex-wrap justify-center gap-3 reveal" aria-label="Navegación de pilares">
        <a
          v-for="pilar in pilares"
          :key="pilar.id"
          :href="`#${pilar.id}`"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-body font-medium text-slate hover:text-white border border-white/10 hover:border-light/30 hover:bg-white/5 transition-all duration-200"
        >
          <component :is="pilar.icon" class="w-4 h-4" :stroke-width="1.5" />
          {{ pilar.titulo.split(' ')[0] }}
        </a>
      </nav>
    </div>
  </SectionWrapper>

  <!-- Pillars -->
  <template v-for="(pilar, index) in pilares" :key="pilar.id">
    <SectionWrapper :id="pilar.id" :bg="index % 2 === 0 ? 'transparent' : 'light'">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        <!-- Icon side -->
        <div
          class="md:col-span-4 flex md:justify-center reveal"
          :class="index % 2 !== 0 ? 'md:order-2' : ''"
        >
          <div class="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-blue/10 dark:bg-blue/10 flex items-center justify-center">
            <component :is="pilar.icon" class="w-10 h-10 md:w-14 md:h-14 text-light" :stroke-width="1.2" />
          </div>
        </div>

        <!-- Content side -->
        <div
          class="md:col-span-8 reveal"
          :class="index % 2 !== 0 ? 'md:order-1' : ''"
        >
          <span class="inline-block text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent mb-3">
            Eje {{ index + 1 }}
          </span>
          <h2 class="text-2xl md:text-3xl font-heading font-bold text-dark dark:text-white mb-6">
            {{ pilar.titulo }}
          </h2>
          <div class="space-y-4">
            <p
              v-for="(parrafo, pIndex) in pilar.descripcion"
              :key="pIndex"
              class="text-slate font-body text-base leading-relaxed"
            >
              {{ parrafo }}
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  </template>

  <!-- Bottom CTA -->
  <SectionWrapper bg="dark">
    <div class="text-center max-w-xl mx-auto reveal">
      <h2 class="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
        Querés ser parte?
      </h2>
      <p class="text-slate font-body mb-8">
        Hay muchas formas de sumarte a este movimiento. Clubes, deportistas, familias, sponsors — todos tienen un lugar.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <BaseButton to="/sumate" variant="primary">Sumate</BaseButton>
        <BaseButton to="/contacto" variant="outline">Contactanos</BaseButton>
      </div>
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
