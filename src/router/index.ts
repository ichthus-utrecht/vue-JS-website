import { createWebHistory, createRouter } from "vue-router"
// Met createWebHistory kunnen we de gebruiker navigatiegeschiedenis geven, en met createRouter kunnen we een routerobject maken

import StartPagina from '../views/StartPagina.vue'
import GeloofPagina from '../views/activiteiten/GeloofPagina.vue'
import BestuursInfo from '../views/vereniging/BestuursInfo.vue'
import VisiePagina from '../views/vereniging/VisiePagina.vue'
import PraktischPagina from '../views/activiteiten/PraktischPagina.vue'
import JaarthemaPagina from '../views/vereniging/JaarthemaPagina.vue'
import GeschiedenisPagina from '../views/vereniging/GeschiedenisPagina.vue'
import LidWordenPagina from '../views/LidWordenPagina.vue'
import AdverterenPagina from '../views/over/AdverterenPagina.vue'
import ContactPagina from '../views/over/ContactPagina.vue'
import ExternPagina from '../views/over/ExternPagina.vue'
import VriendenIchthusPagina from '../views/over/VriendenIchthusPagina.vue'
import AgendaPagina from '../views/activiteiten/AgendaPagina.vue'
import Error404Pagina from '../views/Error404Pagina.vue'
import PrivacyPagina from '../views/over/PrivacyPagina.vue'
import NieuwsPagina from '../views/NieuwsPagina.vue'
import LustrumPagina from '@/views/LustrumPagina.vue'
import LHBTIQ from "../views/over/LHBTIQ+.vue"

const routes = [
  {
    path: "/",
    name: "StartPagina",
    component: StartPagina,
  },
  {
    path: "/activiteiten-geloof",
    name: "GeloofPagina",
    component: GeloofPagina,
    meta: {
      titel: "Geloof",
    },
  },
  {
    path: "/bestuur",
    name: "BestuursInfo",
    component: BestuursInfo,
    meta: {
      titel: "Bestuur",
    },
  },
  {
    path: "/visie-missie",
    name: "VisiePagina",
    component: VisiePagina,
    meta: {
      titel: "Waar wij voor staan",
    },
  },
  {
    path: "/activiteiten-praktisch",
    name: "Praktisch",
    component: PraktischPagina,
    meta: {
      titel: "Praktisch"
    },
  },
  {
    path: "/jaarthema",
    name: "JaarthemaPagina",
    component: JaarthemaPagina,
    meta: {
      titel: "Jaarthema",
    },
  },
  {
    path: "/geschiedenis",
    name: "GeschiedenisPagina",
    component: GeschiedenisPagina,
    meta: {
      titel: "Geschiedenis",
    },
  },
  {
    path: "/lid-worden",
    name: "LidWordenPagina",
    component: LidWordenPagina,
    meta: {
      titel: "Lid worden",
    },
  },
  {
    path: "/adverteren",
    name: "AdverterenPagina",
    component: AdverterenPagina,
    meta: {
      titel: "Adverteren",
    },
  },
  {
    path: "/contact",
    name: "ContactPagina",
    component: ContactPagina,
    meta: {
      titel: "Contact",
    },
  },
  {
    path: "/extern",
    name: "ExternPagina",
    component: ExternPagina,
    meta: {
      titel: "Extern",
    },
  },
  {
    path: "/lhbtiq",
    name: "LHBTIQ+",
    component: LHBTIQ,
    meta: {
      titel: "LHBTIQ+",
    },
  },
  {
    path: "/vrienden",
    name: "VriendenIchthusPagina",
    component: VriendenIchthusPagina,
    meta: {
      titel: "Vrienden",
    },
  },
  {
    path: "/agenda",
    name: "AgendaPagina",
    component: AgendaPagina,
    meta: {
      titel: "Agenda",
    },
  },
  {
    path: "/privacy",
    name: "PrivacyPagina",
    component: PrivacyPagina,
    meta: {
      titel: "Privacy",
    },
  },
  {
    path: "/nieuws/:nummer", // Zo kan de pagina voor elk nieuwsitem gegenereerd worden
    name: "NieuwPagina",
    component: NieuwsPagina,
    meta: {
      titel: "NieuwsPagina",
    },
    props: true
  },
  {
    path: '/lustrum',
    name: 'Lustrum',
    component: LustrumPagina,
    meta: {
      titel: "Lustrum"
    }
  },
  // Als geen van bovenstaande gematcht worden:
  {
    path: "/:pathMatch(.*)*",
    name: "404Pagina",
    component: Error404Pagina,
    meta: {
      titel: "Error 404",
    },
  },
]


const router = createRouter({ 
  history: createWebHistory(), 
  routes,
  // eslint-disable-next-line 
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) { // pijltje terug 
      return savedPosition}
    // anders naar boven 
    return {top: 0}
  }
 })



router.beforeEach((to) => { // html-title instellen
  if ('titel' in to.meta)
    document.title = to.meta.titel + ' | Ichthus Utrecht'
  else
    document.title = 'Ichthus Utrecht'
})

export default router