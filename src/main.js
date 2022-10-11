import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
window.Kakao.init("186021d687338f41d27f7880a940ee11");
