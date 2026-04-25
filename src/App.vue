<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Benefits from "./components/Benefits.vue";
import Features from "./components/Features.vue";
import Services from "./components/Services.vue";
import HowItWorks from "./components/HowItWorks.vue";
import Sponsors from "./components/Sponsors.vue";
import Testimonials from "./components/Testimonials.vue";
import Team from "./components/Team.vue";
import Pricing from "./components/Pricing.vue";
import Community from "./components/Community.vue";
import Contact from "./components/Contact.vue";
import FAQ from "./components/FAQ.vue";
import Footer from "./components/Footer.vue";
import AnimatedBackground from "./components/ui/animation/AnimatedBackground.vue";
</script>

<template>
  <div class="relative min-h-screen overflow-hidden">
    <AnimatedBackground />

    <div class="relative z-10">
      <Navbar />
      <Hero />
      <Sponsors />
      <!-- <Benefits /> -->
      <Features />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Team />
      <Community />
      <Pricing />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  </div>
</template>
