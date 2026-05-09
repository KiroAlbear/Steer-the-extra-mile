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
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="translate-y-3 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-3 opacity-0"
  >
    <Button
      v-if="isVisible"
      size="icon"
      class="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full shadow-lg sm:bottom-8 sm:right-8"
      aria-label="Back to top"
      @click="scrollToTop"
    >
      <ArrowUp class="size-5" />
    </Button>
  </Transition>
</template>
