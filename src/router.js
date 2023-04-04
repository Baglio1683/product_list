import { createRouter, createWebHistory } from "vue-router";

import NotFound from './pages/NotFound.vue';
import ProductDetail from './pages/ProductDetail.vue'; 
import ProductList from './pages/ProductList.vue'; 


const router = createRouter({
    history: createWebHistory(), 
    routes: [
        {
            path: "/",
            name: "product-list",
            component: ProductList,
            props: true 
        }, 

        {
            path: "/Details",
            name: "product-detail",
            component: ProductDetail,
            props: true,
        }, 

        {
          path: "/:pathMatch(.*)*",
          name: "not-found",
          component: NotFound,
      }
    ]

}); 

export {router}; 