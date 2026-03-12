<template>
  <section class="relative min-h-screen flex items-center px-4 py-20 lg:py-40 overflow-hidden">

    <!-- Background: clean white -->
    <div class="absolute inset-0 bg-white" />
    <!-- Background: subtle blue warmth top-right -->
    <div class="absolute inset-0 bg-gradient-to-br from-light/15 via-transparent to-accent/5" />

    <!-- Two-column content grid -->
    <div class="relative z-10 w-full max-w-[1080px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

      <!-- ── LEFT COLUMN: Text ── -->
      <div class="flex flex-col gap-8">

        <!-- Badge -->
        <div class="reveal">
          <span class="inline-flex items-center gap-2 border border-blue/30 rounded-full px-3 py-1 text-sm font-body font-medium text-blue bg-blue/8 w-fit">
            <span class="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
            Fundación · Corrientes, Argentina
          </span>
        </div>

        <!-- Headline -->
        <h1 class="reveal font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tighter">
          <span class="text-dark">Conectamos</span><br>
          <span class="text-blue">el deporte</span><br>
          <span class="text-dark">correntino.</span>
        </h1>

        <!-- Description -->
        <p class="reveal font-body text-lg leading-relaxed text-slate max-w-md">
          Somos una fundación sin fines de lucro que articula
          <strong class="text-dark/80 font-medium">clubes, federaciones y comunidades</strong>
          para fortalecer el deporte en Corrientes. Promovemos infraestructura, inclusión y políticas que llegan a todos.
        </p>

        <!-- CTAs -->
        <!-- BaseButton already applies inline-flex items-center gap-2 — no inner wrapper needed -->
        <div class="reveal flex flex-row gap-4">
          <BaseButton to="/quienes-somos" variant="primary">
            Conocé la fundación <ArrowRight :size="16" />
          </BaseButton>
          <BaseButton to="/sumate" variant="outline">
            Sumate
          </BaseButton>
        </div>

      </div>

      <!-- ── RIGHT COLUMN: Photo Collage ── -->
      <div class="relative h-48 lg:h-[420px]">

        <!-- Desktop: 4 staggered absolutely-positioned photos -->
        <!-- Photo 1 — top-left, large -->
        <div
          class="reveal absolute top-0 left-[4%] w-[52%] h-[54%] z-30 rounded-2xl overflow-hidden border border-white/[0.06] shadow-lg hidden lg:block"
        >
          <img
            src="/images/hero/team-men.jpg"
            alt="Equipo de fútbol masculino celebrando en cancha de Corrientes"
            class="w-full h-full object-cover object-center"
          />
          <div class="absolute inset-0 bg-blue/5 pointer-events-none" />
        </div>

        <!-- Photo 2 — top-right -->
        <div
          class="reveal absolute top-[6%] right-0 w-[44%] h-[46%] z-20 rounded-2xl overflow-hidden border border-white/[0.06] shadow-lg hidden lg:block"
          style="transition-delay: 100ms"
        >
          <img
            src="/images/hero/team-women-trophy.jpg"
            alt="Equipo femenino campeón con trofeo y bandera de Corrientes"
            class="w-full h-full object-cover object-center"
          />
          <div class="absolute inset-0 bg-blue/5 pointer-events-none" />
        </div>

        <!-- Photo 3 — bottom-left -->
        <div
          class="reveal absolute bottom-0 left-0 w-[46%] h-[42%] z-20 rounded-2xl overflow-hidden border border-white/[0.06] shadow-lg hidden lg:block"
          style="transition-delay: 200ms"
        >
          <img
            src="/images/hero/team-women-huddle.jpg"
            alt="Equipo femenino en rueda antes del partido"
            class="w-full h-full object-cover object-center"
          />
          <div class="absolute inset-0 bg-blue/5 pointer-events-none" />
        </div>

        <!-- Photo 4 — bottom-right, large -->
        <div
          class="reveal absolute bottom-[2%] right-[4%] w-[50%] h-[48%] z-30 rounded-2xl overflow-hidden border border-white/[0.06] shadow-lg hidden lg:block"
          style="transition-delay: 300ms"
        >
          <img
            src="/images/hero/team-training.jpg"
            alt="Plantel masculino entrenando en cancha con estadio al fondo"
            class="w-full h-full object-cover object-top"
          />
          <div class="absolute inset-0 bg-blue/5 pointer-events-none" />
        </div>

        <!-- Mobile: 2-photo grid (photos 3 and 4 are not shown on mobile) -->
        <div class="grid grid-cols-2 gap-3 h-full lg:hidden">
          <div class="reveal relative rounded-2xl overflow-hidden border border-white/[0.06] shadow-lg h-full">
            <img
              src="/images/hero/team-men.jpg"
              alt="Equipo de fútbol masculino celebrando en cancha de Corrientes"
              class="w-full h-full object-cover object-center"
            />
            <div class="absolute inset-0 bg-blue/5 pointer-events-none" />
          </div>
          <div class="reveal relative rounded-2xl overflow-hidden border border-white/[0.06] shadow-lg h-full" style="transition-delay: 100ms">
            <img
              src="/images/hero/team-women-trophy.jpg"
              alt="Equipo femenino campeón con trofeo y bandera de Corrientes"
              class="w-full h-full object-cover object-center"
            />
            <div class="absolute inset-0 bg-blue/5 pointer-events-none" />
          </div>
        </div>

      </div>
      <!-- end right column -->

    </div>
    <!-- end grid -->

    <!-- Scroll indicator -->
    <div class="reveal absolute bottom-8 left-1/2 -translate-x-1/2">
      <div class="w-6 h-10 rounded-full border-2 border-dark/20 flex items-start justify-center p-1.5">
        <div class="w-1.5 h-1.5 rounded-full bg-blue animate-bounce" />
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
</script>
