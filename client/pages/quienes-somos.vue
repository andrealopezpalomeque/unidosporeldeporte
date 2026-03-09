<script setup lang="ts">
import { onMounted } from 'vue'
import { Award, UserCheck, Landmark, FileText } from 'lucide-vue-next'

useHead({
  title: 'Quiénes Somos — Unidos por el Deporte',
  meta: [
    { name: 'description', content: 'Conocé la historia, misión y equipo de la Fundación Unidos por el Deporte. Nacimos en Corrientes para transformar el deporte provincial.' },
    { property: 'og:title', content: 'Quiénes Somos — Unidos por el Deporte' },
    { property: 'og:description', content: 'Conocé la historia, misión y equipo de la Fundación Unidos por el Deporte.' },
  ],
})

const consejo = [
  { nombre: 'Juan José López Desimoni', cargo: 'Presidente', icon: Award },
  { nombre: 'Carlos Alberto Insaurralde', cargo: 'Secretario', icon: UserCheck },
  { nombre: 'Natalia Elena Godoy', cargo: 'Tesorera', icon: Landmark },
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
    { threshold: 0.15 }
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})
</script>

<template>
  <!-- Page Hero -->
  <SectionWrapper bg="dark">
    <div class="pt-12 md:pt-20 pb-4 text-center max-w-2xl mx-auto">
      <span class="inline-block text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent mb-4 reveal">
        Nuestra identidad
      </span>
      <h1 class="text-4xl md:text-5xl font-heading font-extrabold text-white dark:text-white leading-tight mb-4 reveal">
        Quiénes <span class="text-light">somos</span>
      </h1>
      <p class="text-slate text-lg font-body leading-relaxed reveal">
        Una fundación correntina nacida del compromiso con el deporte, la inclusión y el desarrollo de nuestra provincia.
      </p>
    </div>
  </SectionWrapper>

  <!-- Origin Story -->
  <SectionWrapper>
    <div class="max-w-3xl mx-auto reveal">
      <span class="inline-block text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent mb-4">
        Nuestra historia
      </span>
      <h2 class="text-2xl md:text-3xl font-heading font-bold text-dark dark:text-white mb-8">
        Cómo nació Unidos por el Deporte
      </h2>
      <div class="space-y-6 text-slate font-body text-base md:text-lg leading-relaxed">
        <p>
          En noviembre de 2024, en la ciudad de Corrientes, nació una idea que venía gestándose hace mucho tiempo: crear un espacio que conecte al deporte correntino de manera real, concreta y sostenida. No queríamos una organización más. Queríamos una plataforma viva que articule lo que ya existe — clubes, federaciones, deportistas, familias — y lo potencie con gestión, recursos e infraestructura.
        </p>
        <p>
          Así se constituyó la <strong class="text-dark dark:text-white font-semibold">Fundación Unidos por el Deporte</strong> el 8 de noviembre de 2024, con la convicción de que el deporte no es solo actividad física: es educación, es salud, es identidad y es comunidad. Desde el primer día, nuestro objetivo fue claro — trabajar para que cada correntino, sin importar su edad, género o condición, tenga acceso a la práctica deportiva.
        </p>
        <p>
          En mayo de 2025, la Inspección General de Personas Jurídicas de Corrientes aprobó formalmente nuestra fundación mediante la Resolución Nº 000552/2025. Desde entonces, venimos construyendo alianzas con clubes, instituciones educativas y organismos públicos para hacer del deporte un motor de transformación provincial.
        </p>
      </div>
    </div>
  </SectionWrapper>

  <!-- Mission / Vision / Purpose -->
  <SectionWrapper bg="light">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="p-8 rounded-2xl bg-white/60 dark:bg-white/[0.04] border border-white/10 dark:border-white/5 reveal">
        <div class="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center mb-5">
          <svg class="w-6 h-6 text-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 10-5.5 5.5L8 13"/></svg>
        </div>
        <h3 class="text-lg font-heading font-bold text-dark dark:text-white mb-3">Misión</h3>
        <p class="text-slate text-sm font-body leading-relaxed">
          Promover, articular y fortalecer el deporte, la actividad física, la cultura y la educación en la provincia de Corrientes, generando acciones concretas que mejoren la calidad de vida de sus habitantes y potencien el desarrollo de sus instituciones deportivas.
        </p>
      </div>
      <div class="p-8 rounded-2xl bg-white/60 dark:bg-white/[0.04] border border-white/10 dark:border-white/5 reveal">
        <div class="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center mb-5">
          <svg class="w-6 h-6 text-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
        </div>
        <h3 class="text-lg font-heading font-bold text-dark dark:text-white mb-3">Visión</h3>
        <p class="text-slate text-sm font-body leading-relaxed">
          Ser la organización de referencia en la articulación deportiva de Corrientes, reconocida por su capacidad de conectar actores, movilizar recursos y transformar el acceso al deporte en un derecho ejercido por toda la comunidad.
        </p>
      </div>
      <div class="p-8 rounded-2xl bg-white/60 dark:bg-white/[0.04] border border-white/10 dark:border-white/5 reveal">
        <div class="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center mb-5">
          <svg class="w-6 h-6 text-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
        </div>
        <h3 class="text-lg font-heading font-bold text-dark dark:text-white mb-3">Propósito</h3>
        <p class="text-slate text-sm font-body leading-relaxed">
          Que cada persona en Corrientes — niño, joven, adulto o adulto mayor, con o sin discapacidad — tenga la posibilidad real de practicar deporte, desarrollarse y sentirse parte de una comunidad que se mueve unida.
        </p>
      </div>
    </div>
  </SectionWrapper>

  <!-- Team -->
  <SectionWrapper>
    <div class="text-center mb-12 reveal">
      <span class="inline-block text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent mb-4">
        Nuestro equipo
      </span>
      <h2 class="text-2xl md:text-3xl font-heading font-bold text-dark dark:text-white">
        Consejo de Administración
      </h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
      <div
        v-for="miembro in consejo"
        :key="miembro.nombre"
        class="text-center p-8 rounded-2xl bg-white/5 dark:bg-white/[0.03] border border-white/10 dark:border-white/5 reveal"
      >
        <div class="w-16 h-16 rounded-full bg-blue/10 flex items-center justify-center mx-auto mb-5">
          <component :is="miembro.icon" class="w-7 h-7 text-light" :stroke-width="1.5" />
        </div>
        <h3 class="text-base font-heading font-bold text-dark dark:text-white mb-1">
          {{ miembro.nombre }}
        </h3>
        <p class="text-sm text-accent font-body font-medium">
          {{ miembro.cargo }}
        </p>
      </div>
    </div>
  </SectionWrapper>

  <!-- Legal Credentials -->
  <SectionWrapper bg="dark">
    <div class="max-w-2xl mx-auto text-center reveal">
      <div class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-6">
        <FileText class="w-6 h-6 text-slate" :stroke-width="1.5" />
      </div>
      <h3 class="text-lg font-heading font-bold text-white mb-6">Datos institucionales</h3>
      <div class="space-y-2 text-sm text-slate font-body leading-relaxed">
        <p><span class="text-white/60">Razón social:</span> Fundación Unidos por el Deporte</p>
        <p><span class="text-white/60">Constitución:</span> 8 de noviembre de 2024</p>
        <p><span class="text-white/60">Resolución:</span> Nº 000552/2025 — IGPJ Corrientes (12 de mayo de 2025)</p>
        <p><span class="text-white/60">Expediente:</span> Nº 221-13-11-4403/2024</p>
        <p><span class="text-white/60">Registro:</span> Tomo 170, Folio 14/23, Legajo 2061</p>
        <p><span class="text-white/60">Domicilio legal:</span> La Cruz 3149, Corrientes Capital</p>
        <p><span class="text-white/60">Duración:</span> 99 años</p>
        <p><span class="text-white/60">Carácter:</span> Persona jurídica privada, sin fines de lucro, de bien común</p>
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
