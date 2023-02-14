import { createRouter, createWebHashHistory } from "vue-router";
import EMCPage from "./components/EMC.vue";
import DoctorsPage from "./components/Doctors.vue";
import MedhelpPage from "./components/Medhelp.vue";
import SanatoriumsPage from "./components/Sanatoriums.vue";
import ECMHPage from "./components/ECMH.vue";

import StartPage from "./components/StartPage.vue";
import CardClinic from "./components/CardClinic.vue";
import CardDoctor from "./components/CardDoctor.vue";
import CardSanatorium from "./components/CardSanatorium.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    // StartPage
    { path: "/StartPage", name: "StartPage", component: StartPage, alias: "/" },
    { path: "/EMCPage", name: "EMCPage", component: EMCPage },
    { path: "/DoctorsPage", name: "DoctorsPage", component: DoctorsPage },
    { path: "/MedhelpPage", name: "MedhelpPage", component: MedhelpPage },
    { path: "/SanatoriumsPage", name: "SanatoriumsPage", component: SanatoriumsPage },
    { path: "/ECMHPage", name: "ECMHPage", component: ECMHPage },

    { path: "/card_Clinic", name: "CardClinic", component: CardClinic },
    { path: "/card_Doctor", name: "CardDoctor", component: CardDoctor },
    { path: "/card_Sanatorium", name: "CardSanatorium", component: CardSanatorium },
  ],

  scrollBehavior(to, from, savedPosition) {

    if (savedPosition) {
      return savedPosition;
    } 
    else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } 
    else {
      return {top: 0};      
    }
  },
});
