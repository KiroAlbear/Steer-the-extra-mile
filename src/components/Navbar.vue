<script lang="ts" setup>
import { nextTick, ref, type Component } from "vue";

import { useColorMode } from "@vueuse/core";
const mode = useColorMode();
mode.value = "dark";
import logo from "@/assets/logo.png";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import {
  Briefcase,
  CircleHelp,
  Mail,
  Menu,
  Rocket,
  Sparkles,
  Users,
} from "lucide-vue-next";

interface RouteProps {
  href: string;
  label: string;
  icon: Component;
}

const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Features",
    icon: Sparkles,
  },
  {
    href: "#services",
    label: "Services",
    icon: Briefcase,
  },
  {
    href: "#team",
    label: "Team",
    icon: Users,
  },
  {
    href: "#contact",
    label: "Contact",
    icon: Mail,
  },
  {
    href: "#faq",
    label: "FAQ",
    icon: CircleHelp,
  },
];

const isOpen = ref<boolean>(false);

const navigateFromMobileMenu = (href: string) => {
  isOpen.value = false;

  nextTick(() => {
    const target = document.getElementById(href.replace("#", ""));

    if (!target) return;

    const headerOffset = 96;
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: targetTop,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
    window.history.pushState(null, "", href);
  });
};
</script>

<template>
  <header
    :class="{
      'shadow-light': mode === 'light',
      'shadow-dark': mode === 'dark',
      'w-[90%] md:w-[82%] lg:w-[90%] xl:w-[80%] 2xl:w-[70%] lg:max-w-screen-xl top-5 mx-auto sticky border z-40 rounded-2xl flex lg:grid lg:grid-cols-[12rem_1fr_12rem] justify-between items-center py-0 px-3 sm:px-4 lg:px-5 bg-card shadow-md': true,
    }"
  >
    <div class="font-bold text-lg flex items-center lg:justify-self-start">
      <img
        :src="logo"
        alt="ShadcnVue logo"
        class="mr-4 h-20 w-40 lg:w-44 xl:w-48 rounded-lg object-contain"
      />
    </div>
    <!-- Mobile -->
    <div class="flex items-center lg:hidden">
      <Sheet v-model:open="isOpen">
        <SheetTrigger as-child>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open navigation menu"
            @click="isOpen = true"
          >
            <Menu class="size-5" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="left"
          class="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card"
          @close-auto-focus.prevent
        >
          <div>
            <SheetHeader class="mb-6 px-4 text-left">
              <SheetTitle class="flex items-center">
                <img
                  :src="logo"
                  alt="ShadcnVue logo"
                  class="h-16 w-40 rounded-lg object-contain"
                />
              </SheetTitle>
            </SheetHeader>

            <nav class="flex flex-col gap-2">
              <a
                v-for="{ href, label, icon } in routeList"
                :key="label"
                :href="href"
                class="flex h-12 items-center gap-3 rounded-md px-4 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                @click.prevent="navigateFromMobileMenu(href)"
              >
                <component
                  :is="icon"
                  class="size-5 shrink-0 text-primary"
                />
                {{ label }}
              </a>
            </nav>
          </div>

          <Button
            as-child
            size="lg"
            class="mx-4 w-[calc(100%-2rem)]"
          >
            <a
              href="#contact"
              @click.prevent="navigateFromMobileMenu('#contact')"
            >
              <Rocket class="mr-2 size-5" />
              Start a Project
            </a>
          </Button>
        </SheetContent>
      </Sheet>
    </div>

    <!-- Desktop -->
    <NavigationMenu class="hidden lg:flex justify-self-center">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Button
              v-for="{ href, label } in routeList"
              :key="label"
              as-child
              variant="ghost"
              class="justify-start text-base"
            >
              <a :href="href">
                {{ label }}
              </a>
            </Button>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    <Button
      as-child
      class="hidden lg:inline-flex justify-self-end whitespace-nowrap"
    >
      <a href="#contact">
        Start a Project
      </a>
    </Button>
  </header>
</template>

<style scoped>
.shadow-light {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.085);
}

.shadow-dark {
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.141);
}
</style>
