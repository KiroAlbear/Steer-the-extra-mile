<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What services does Steer the Extra Mile provide?",
    answer: "We provide tailored software solutions including website development, mobile applications, automation tools, AI integrations, system integrations, and digital solutions designed to help businesses grow efficiently.",
    value: "item-1",
  },
  {
    question: "Can you build a custom solution for my business?",
    answer:
      "Yes. We analyze your business needs, workflow, and goals, then design and develop a custom solution that fits your exact requirements instead of offering a one-size-fits-all product.",
    value: "item-2",
  },
  {
    question:
      "Do you offer support after launching the project?",
    answer:
      "Yes. We provide post-launch support, maintenance, performance improvements, bug fixes, and future updates to make sure your solution continues to run smoothly.",
    value: "item-3",
  },
  {
    question: "How long does it take to complete a project?",
    answer: "The timeline depends on the project size, features, and complexity. A simple website may take a short time, while larger platforms or custom systems require more planning, development, and testing.",
    value: "item-4",
  },
  {
    question:
      "Can you integrate AI or third-party tools into my website or app?",
    answer: "Yes. We can integrate AI features, payment gateways, CRM systems, email marketing tools, social media platforms, analytics tools, and other third-party services based on your business needs.",
    value: "item-5",
  },
];
</script>

<template>
  <section
    id="faq"
    class="container md:w-[700px] py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">FAQS</h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Common Questions
      </h2>
    </div>

    <Accordion
      type="single"
      collapsible
      class="AccordionRoot"
    >
      <AccordionItem
        v-for="{ question, answer, value } in FAQList"
        :key="value"
        :value="value"
      >
        <AccordionTrigger class="text-left"> {{ question }} </AccordionTrigger>

        <AccordionContent>{{ answer }}</AccordionContent>
      </AccordionItem>
    </Accordion>

    <h3 class="font-medium mt-4">
      Still have questions?
      <a
        href="#contact"
        class="text-muted-foreground underline"
      >
        Contact us
      </a>
    </h3>
  </section>
</template>
