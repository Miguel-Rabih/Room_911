import { createRouter, createWebHistory } from 'vue-router'
import LoginAdministrador from '@/views/loginAmin.vue'
import DashboardAdmin from '@/views/dashboardAdmin.vue'
import LoginEmpleado from '@/views/loginEmpleado.vue'
import AccesEmployee from '@/views/accesEmployee.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/loginAdmin', component: LoginAdministrador },
    { path: '/loginEmpleado', component: LoginEmpleado },
    { path: '/dashboardAdmin', component: DashboardAdmin },
    { path: '/accesEmploye', component: AccesEmployee },
  ],
})

export default router
