<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { ArrowUp } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

const isVisible = ref(false);

const updateVisibility = () => {
  isVisible.value = window.scrollY > 320;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
  });
};

onMounted(() => {
  updateVisibility();
  window.addEventListener("scroll", updateVisibility, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateVisibility);
});
</script>

<template>
  <Button
    size="icon"
    class="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full shadow-lg transition-all duration-300 ease-out sm:bottom-8 sm:right-8"
    :class="
      isVisible
        ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
        : 'pointer-events-none translate-y-4 scale-75 opacity-0'
    "
    aria-label="Back to top"
    :aria-hidden="!isVisible"
    :tabindex="isVisible ? 0 : -1"
    @click="scrollToTop"
  >
    <ArrowUp class="size-5" />
  </Button>
</template>
