import { createWebHistory, createRouter } from "vue-router"
// Met createWebHistory kunnen we de gebruiker navigatiegeschiedenis geven, en met createRouter kunnen we een routerobject maken

import StartPagina from '../views/StartPagina.vue'
import GeloofPagina from '../views/activiteiten/GeloofPagina.vue'
import BestuursInfo from '../views/vereniging/BestuursInfo.vue'
import VisiePagina from '../views/vereniging/VisiePagina.vue'

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
]


const router = createRouter({ history: createWebHistory(), routes })

router.beforeEach((to) => { // html-title instellen
  if ('titel' in to.meta)
    document.title = to.meta.titel + ' | Ichthus Utrecht'
  else
    document.title = 'Ichthus Utrecht'
})

export default router