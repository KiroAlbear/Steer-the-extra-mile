import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import { scrollReveal } from "./directives/scrollReveal";

createApp(App).directive("scroll-reveal", scrollReveal).mount("#app");
