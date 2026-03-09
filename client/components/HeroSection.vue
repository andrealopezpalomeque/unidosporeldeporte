<template>
  <section class="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-dark via-dark to-dark/95 dark:from-dark dark:via-dark dark:to-dark/95" />
    <div class="absolute inset-0 bg-gradient-to-br from-blue/5 via-transparent to-light/5" />

    <!-- Content -->
    <div class="relative z-10 text-center max-w-2xl mx-auto">
      <LogoIcon :size="100" color="light" class="mx-auto mb-8 reveal" />

      <h1 class="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 reveal">
        <span class="text-white">Conectamos al </span>
        <span class="text-light">deporte</span>
        <span class="text-white"> correntino</span>
      </h1>

      <p class="font-body text-lg sm:text-xl text-slate mb-10 reveal">
        El deporte nos une
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
        <BaseButton to="/quienes-somos" variant="primary">
          Conocé la fundación
        </BaseButton>
        <BaseButton to="/sumate" variant="outline">
          Sumate
        </BaseButton>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 reveal">
      <div class="w-6 h-10 rounded-full border-2 border-slate/40 flex items-start justify-center p-1.5">
        <div class="w-1.5 h-1.5 rounded-full bg-light animate-bounce" />
      </div>
    </div>
  </section>
</template>
