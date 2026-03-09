<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-dark text-dark dark:text-white">
    <AppHeader />

    <main class="flex-1">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
