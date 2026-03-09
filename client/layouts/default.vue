<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header placeholder -->
    <header class="p-4 border-b border-slate/20">
      <p class="text-center font-heading font-bold text-blue">Unidos por el Deporte</p>
    </header>

    <!-- Main content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer placeholder -->
    <footer class="p-4 border-t border-slate/20">
      <p class="text-center text-sm text-slate">
        &copy; 2025 Fundación Unidos por el Deporte
      </p>
    </footer>
  </div>
</template>
