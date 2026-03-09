<template>
  <div>
    <HeroSection />
    <PillarsSection />
    <ImpactSection />
    <AudienceCTA />
    <NewsSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Unidos por el Deporte — El deporte nos une',
  meta: [
    { name: 'description', content: 'Fundacion Unidos por el Deporte. Promovemos el deporte, la actividad fisica, la cultura y la educacion en Corrientes, Argentina.' },
    { property: 'og:title', content: 'Unidos por el Deporte — El deporte nos une' },
    { property: 'og:description', content: 'Fundacion sin fines de lucro dedicada a fortalecer el deporte correntino.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/og-image.png' },
  ],
})

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
    { threshold: 0.1 },
  )

  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<style>
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
