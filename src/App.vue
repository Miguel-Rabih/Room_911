```vue
<template>
  <div class="layout">
    <div class="access-card" v-if="!showAdmin && !showEmpleado">
      <h1 class="title">Panel de Acceso</h1>
      <p class="subtitle">Selecciona tu tipo de inicio de sesión</p>

      <div class="button-group">
        <button class="btn primary" @click="showEmpleado = true">Acceder al Room</button>
        <button class="btn secondary" @click="showAdmin = true">Iniciar como Administrador</button>
      </div>

      <p class="footer-text">© 2025 Room System. Todos los derechos reservados.</p>
    </div>

    <!-- Vistas condicionales -->
    <login-admin v-if="showAdmin" />
    <login-empleado v-if="showEmpleado" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LoginAdmin from '@/views/loginAmin.vue'
import LoginEmpleado from '@/views/loginEmpleado.vue'

const showAdmin = ref(false)
const showEmpleado = ref(false)
</script>

<style>
/* Fondo principal */
.layout {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #0f4c81 0%, #143e60 100%);
  font-family: "Poppins", sans-serif;
}

/* Tarjeta de acceso */
.access-card {
  background: #ffffff;
  padding: 3rem 2.5rem;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  text-align: center;
  max-width: 400px;
  width: 100%;
  transition: transform 0.3s ease;
}

.access-card:hover {
  transform: translateY(-5px);
}

/* Título */
.title {
  color: #0f4c81;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

/* Subtítulo */
.subtitle {
  color: #6b7280;
  margin-bottom: 2rem;
  font-size: 1rem;
}

/* Grupo de botones */
.button-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.8rem;
}

/* Estilo general de botones */
.btn {
  border: none;
  padding: 0.9rem 1.2rem;
  border-radius: 12px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.25s ease-in-out;
  width: 100%;
}

/* Botón principal */
.btn.primary {
  background: linear-gradient(135deg, #0f4c81 0%, #2a6cb0 100%);
  color: #fff;
  box-shadow: 0 4px 15px rgba(15, 76, 129, 0.3);
}

.btn.primary:hover {
  background: linear-gradient(135deg, #2a6cb0 0%, #0f4c81 100%);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(15, 76, 129, 0.35);
}

/* Botón secundario */
.btn.secondary {
  background: #ffffff;
  border: 2px solid #0f4c81;
  color: #0f4c81;
}

.btn.secondary:hover {
  background: #0f4c81;
  color: #ffffff;
  transform: translateY(-3px);
}

/* Footer */
.footer-text {
  font-size: 0.85rem;
  color: #6b7280;
  margin-top: 0.5rem;
}
</style>

