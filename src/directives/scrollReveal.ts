import type { Directive } from "vue";

const observers = new WeakMap<HTMLElement, IntersectionObserver>();

export const scrollReveal: Directive<HTMLElement> = {
  mounted(el) {
    const sections = Array.from(el.querySelectorAll<HTMLElement>("section"));

    if (el.matches("section")) {
      sections.unshift(el);
    }

    if (sections.length === 0) {
      return;
    }

    sections.forEach((section) => {
      section.classList.add("scroll-reveal");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("scroll-reveal-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.15,
      },
    );

    sections.forEach((section) => observer.observe(section));
    observers.set(el, observer);
  },

  unmounted(el) {
    observers.get(el)?.disconnect();
    observers.delete(el);
  },
};
