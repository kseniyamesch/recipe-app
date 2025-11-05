<template>
  <div class="text-textDark flex flex-col min-h-screen">
    <AppHeader class="fixed top-0 left-0 w-full z-50"></AppHeader>
    <main class="flex-1 pt-20">
      <NuxtPage />
    </main>
    <AppFooter></AppFooter>
  </div>
</template>

<style>
body {
  background-color: #FFF2E0;
}
</style>