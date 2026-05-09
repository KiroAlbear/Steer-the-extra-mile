<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Features from "./components/Features.vue";
import Services from "./components/Services.vue";
import Sponsors from "./components/Sponsors.vue";
import Team from "./components/Team.vue";
import Contact from "./components/Contact.vue";
import FAQ from "./components/FAQ.vue";
import Footer from "./components/Footer.vue";
import BackToTop from "./components/BackToTop.vue";
import AnimatedBackground from "./components/ui/animation/AnimatedBackground.vue";
</script>

<template>
  <div class="relative min-h-screen overflow-hidden">
    <AnimatedBackground />

    <div v-scroll-reveal class="relative z-10">
      <Navbar />
      <Hero />
      <Sponsors />
      <!-- <Benefits /> -->
      <Features />
      <Services />
      <!-- <HowItWorks /> -->
      <!-- <Testimonials /> -->
      <Team />
      <!-- <Community /> -->
      <!-- <Pricing /> -->
      <Contact />
      <FAQ />
      <Footer />
    </div>
    <BackToTop />
  </div>
</template>
