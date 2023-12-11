import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue';
import HomePage from './pages/HomePage.vue';
import LikedItemsPage from './pages/LikedItemsPage.vue';
import ShoppingCart from './pages/ShoppingCart.vue';
import ElectronicCategory from './pages/category/ElectronicCategory.vue';
import EngineCategory from './pages/category/EngineCategory.vue';
import GasSystemCategory from './pages/category/GasSystemCategory.vue';
import OilAndAutoChemistryCategory from './pages/category/OilAndAutoChemistryCategory.vue';
import SuspensionCategory from './pages/category/SuspensionCategory.vue';
import WeelsAndTireCategory from './pages/category/WeelsAndTireCategory.vue';
import DetailItemPage from './pages/DetailItemPage.vue';

const router = createRouter({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/liked',
      component: LikedItemsPage
    },
    {
      path: '/cart',
      component: ShoppingCart
    },
    {
        path: '/categories/engine',
        component: EngineCategory
    },
    {
        path: '/categories/suspension',
        component: SuspensionCategory
    },
    {
        path: '/categories/exhaust-system',
        component: GasSystemCategory
    },
    {
        path: '/categories/electronics',
        component: ElectronicCategory
    },
    {
        path: '/categories/tires-and-wheels',
        component: WeelsAndTireCategory
    },
    {
        path: '/categories/oils-and-auto-chemicals',
        component: OilAndAutoChemistryCategory
    },
    {
        path: '/item',
        name: 'item',
        props: true,
        component: DetailItemPage
    }
  ],
  history: createWebHistory()
})


const app = createApp(App)

app.use(router)
app.mount('#app')
