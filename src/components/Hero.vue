<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-vue-next";
import greatTeamImage from "@/assets/great_team.png";
</script>

<template>
  <section class="container">
    <div
      class="grid items-center lg:grid-cols-2 lg:max-w-screen-xl gap-12 mx-auto py-20 md:py-32"
    >
      <div class="text-center lg:text-left space-y-8">
        <!-- <Badge
          variant="outline"
          class="text-sm py-2"
        > -->
          <!-- <span class="mr-2 text-primary">
            <Badge>New</Badge>
          </span>
          <span> Design is out now! </span> -->
        <!-- </Badge> -->

        <div
          class="max-w-screen-sm mx-auto lg:mx-0 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-normal"
        >
          <h1 class="leading-tight">
            Great Product is
            <span
              class="block text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
              > built by great teams
            </span>
          </h1>
        </div>

        <p class="max-w-screen-sm mx-auto lg:mx-0 text-xl text-muted-foreground">
          We don’t just create software solutions, we create opportunities.
          <br />
          Build smarter and solve challenges with confidence.
        </p>

        <div class="space-y-4 md:space-y-0 md:space-x-4">
          <Button
            as-child
            class="w-5/6 md:w-auto md:px-6 font-bold gap-2 group/arrow"
          >
            <a href="#contact">
              <span>Contact us</span>
              <ArrowRight
                class="size-5 shrink-0 group-hover/arrow:translate-x-1 transition-transform"
              />
            </a>
          </Button>

          <!-- <Button
            as-child
            variant="secondary"
            class="w-5/6 md:w-auto md:px-8 font-bold"
          >
            <a
              href="https://github.com/leoMirandaa/shadcn-vue-landing-page.git"
              target="_blank"
              >Github respository</a
            >
          </Button> -->
        </div>
      </div>

      <div class="relative">
        <!-- gradient shadow -->
        <div
          class="absolute -top-6 right-10 w-[80%] h-[75%] bg-primary/30 blur-3xl rounded-full img-shadow-animation"
        ></div>

        <img
          class="relative w-full max-w-[560px] mx-auto object-contain"
          :src="greatTeamImage"
          alt="Great team building a product"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.img-shadow-animation {
  animation-name: img-shadow-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

@keyframes img-shadow-animation {
  from {
    opacity: 0.5;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
