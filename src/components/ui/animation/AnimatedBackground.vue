<template>
  <div class="pointer-events-none absolute inset-0 z-0 animated-background" />
</template>

<style scoped>
.animated-background {
  background-image: radial-gradient(
    circle at 1px 1px,
    rgba(255, 255, 255, 0.15) 4px,
    transparent 0
  );
  background-size: 100px 100px;
  animation: animated-background 20s linear infinite;
}

@keyframes animated-background {
  from {
    background-position: 0 0;
  }

  to {
    background-position: -200px -200px;
  }
}
</style>
