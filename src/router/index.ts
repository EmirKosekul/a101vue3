import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHashHistory(),
  routes:[
    {path:"/register", component: () =>import("../views/Register-r.vue")},
    {path:"/sign-in", component: () =>import("../views/GirisYap-p.vue")},
    {path:"/", component: () =>import("../views/Anasayfa-a.vue")},
    {path:"/2", component: () =>import("../views/Anasayfa2-a.vue")},
    {path:"/sepet", component: () =>import("../views/Sepet-t.vue")},
    {path:"/r1", component: () =>import("../views/Urun1-n.vue")},
    {path:"/r2", component: () =>import("../views/Urun2-n.vue")},
    {path:"/r3", component: () =>import("../views/Urun3-n.vue")},
  ],
})

export default router