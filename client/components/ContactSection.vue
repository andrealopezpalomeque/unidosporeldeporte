<template>
  <SectionWrapper id="contacto" bg="light">
    <div class="grid md:grid-cols-2 gap-12">
      <!-- Info -->
      <div>
        <p class="text-accent font-body font-semibold text-sm tracking-widest uppercase mb-3 reveal">
          Contacto
        </p>
        <h2 class="font-heading font-bold text-3xl sm:text-4xl mb-6 reveal">
          Hablemos
        </h2>
        <p class="font-body text-slate leading-relaxed mb-8 reveal">
          Si tenés una idea, una consulta o simplemente querés conocernos, escribinos.
          Estamos acá para escucharte.
        </p>

        <div class="space-y-4">
          <div class="flex items-center gap-3 text-slate reveal">
            <MapPin :size="20" class="text-light shrink-0" />
            <span class="font-body text-sm">La Cruz 3149, Corrientes Capital</span>
          </div>
          <div class="flex items-center gap-3 text-slate reveal">
            <Mail :size="20" class="text-light shrink-0" />
            <span class="font-body text-sm">contacto@unidosporeldeporte.org</span>
          </div>
        </div>
      </div>

      <!-- Form -->
      <form class="space-y-5 reveal" @submit.prevent>
        <div>
          <label for="nombre" class="block font-body text-sm font-medium mb-1.5">Nombre</label>
          <input
            id="nombre"
            type="text"
            placeholder="Tu nombre"
            class="w-full rounded-xl border border-white/10 dark:border-white/5 bg-white/5 dark:bg-white/[0.03] px-4 py-3 font-body text-sm text-inherit placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-light/30 transition-all duration-200"
          />
        </div>
        <div>
          <label for="email" class="block font-body text-sm font-medium mb-1.5">Email</label>
          <input
            id="email"
            type="email"
            placeholder="tu@email.com"
            class="w-full rounded-xl border border-white/10 dark:border-white/5 bg-white/5 dark:bg-white/[0.03] px-4 py-3 font-body text-sm text-inherit placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-light/30 transition-all duration-200"
          />
        </div>
        <div>
          <label for="mensaje" class="block font-body text-sm font-medium mb-1.5">Mensaje</label>
          <textarea
            id="mensaje"
            rows="4"
            placeholder="Contanos en qué podemos ayudarte..."
            class="w-full rounded-xl border border-white/10 dark:border-white/5 bg-white/5 dark:bg-white/[0.03] px-4 py-3 font-body text-sm text-inherit placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-light/30 transition-all duration-200 resize-none"
          />
        </div>
        <BaseButton type="submit" variant="primary" class="w-full sm:w-auto">
          Enviar mensaje
        </BaseButton>
      </form>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { MapPin, Mail } from 'lucide-vue-next'
</script>
