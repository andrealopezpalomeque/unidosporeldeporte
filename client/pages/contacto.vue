<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { MapPin, Mail, Send } from 'lucide-vue-next'

useHead({
  title: 'Contacto — Unidos por el Deporte',
  meta: [
    { name: 'description', content: 'Escribinos. Estamos para escucharte. Contactá a la Fundación Unidos por el Deporte en Corrientes.' },
    { property: 'og:title', content: 'Contacto — Unidos por el Deporte' },
    { property: 'og:description', content: 'Contactá a la Fundación Unidos por el Deporte.' },
  ],
})

const form = ref({
  nombre: '',
  email: '',
  mensaje: '',
})

const handleSubmit = () => {
  // Placeholder — will connect to backend later
  console.log('Form submitted:', form.value)
}

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
        Estamos para escucharte
      </span>
      <h1 class="text-4xl md:text-5xl font-heading font-extrabold text-white dark:text-white leading-tight mb-4 reveal">
        <span class="text-light">Contacto</span>
      </h1>
      <p class="text-slate text-lg font-body leading-relaxed reveal">
        Escribinos, estamos para escucharte. Ya sea que representes un club, seas deportista, o simplemente quieras saber más — tu mensaje nos importa.
      </p>
    </div>
  </SectionWrapper>

  <!-- Contact Content -->
  <SectionWrapper>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
      <!-- Info Side -->
      <div class="reveal">
        <span class="inline-block text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent mb-4">
          Hablemos
        </span>
        <h2 class="text-2xl md:text-3xl font-heading font-bold text-dark dark:text-white mb-6">
          Queremos conocerte
        </h2>
        <p class="text-slate font-body text-base leading-relaxed mb-8">
          Si tenés una propuesta, una consulta o simplemente querés acercarte a la fundación, este es el lugar. Respondemos todos los mensajes.
        </p>

        <!-- Contact details -->
        <div class="space-y-5">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center shrink-0 mt-0.5">
              <MapPin class="w-5 h-5 text-light" :stroke-width="1.5" />
            </div>
            <div>
              <p class="text-sm font-body font-semibold text-dark dark:text-white mb-0.5">Domicilio legal</p>
              <p class="text-sm text-slate font-body">La Cruz 3149, Corrientes Capital</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center shrink-0 mt-0.5">
              <Mail class="w-5 h-5 text-light" :stroke-width="1.5" />
            </div>
            <div>
              <p class="text-sm font-body font-semibold text-dark dark:text-white mb-0.5">Email</p>
              <p class="text-sm text-slate font-body">contacto@unidosporeldeporte.org</p>
            </div>
          </div>
        </div>

        <!-- Map placeholder -->
        <div class="mt-8 rounded-2xl bg-white/5 dark:bg-white/[0.03] border border-white/10 dark:border-white/5 h-48 flex items-center justify-center">
          <span class="text-sm text-slate font-body">Mapa</span>
        </div>
      </div>

      <!-- Form Side -->
      <div class="reveal">
        <form @submit.prevent="handleSubmit" class="space-y-5">
          <div>
            <label for="nombre" class="block text-sm font-body font-medium text-dark dark:text-white mb-2">
              Nombre
            </label>
            <input
              id="nombre"
              v-model="form.nombre"
              type="text"
              required
              placeholder="Tu nombre"
              class="w-full px-4 py-3 rounded-xl border border-white/10 dark:border-white/5 bg-white/5 dark:bg-white/[0.03] text-dark dark:text-white placeholder-slate/50 font-body text-sm focus:outline-none focus:ring-2 focus:ring-light/30 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-body font-medium text-dark dark:text-white mb-2">
              Email
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              placeholder="tu@email.com"
              class="w-full px-4 py-3 rounded-xl border border-white/10 dark:border-white/5 bg-white/5 dark:bg-white/[0.03] text-dark dark:text-white placeholder-slate/50 font-body text-sm focus:outline-none focus:ring-2 focus:ring-light/30 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div>
            <label for="mensaje" class="block text-sm font-body font-medium text-dark dark:text-white mb-2">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              v-model="form.mensaje"
              required
              rows="5"
              placeholder="Contanos en qué podemos ayudarte..."
              class="w-full px-4 py-3 rounded-xl border border-white/10 dark:border-white/5 bg-white/5 dark:bg-white/[0.03] text-dark dark:text-white placeholder-slate/50 font-body text-sm focus:outline-none focus:ring-2 focus:ring-light/30 focus:border-transparent transition-all duration-200 resize-none"
            ></textarea>
          </div>

          <BaseButton type="submit" variant="primary" class="w-full sm:w-auto">
            <Send class="w-4 h-4" :stroke-width="2" />
            Enviar mensaje
          </BaseButton>
        </form>
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
