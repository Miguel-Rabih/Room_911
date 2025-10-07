<template>
  <div class="acceso-page">
    <div class="acceso-card">
      <h1>✅ Accediste a la {{ empleado?.room }}</h1>
      <p>Bienvenido, {{ empleado?.nombre }}.</p>
      <button @click="cerrarSesion" class="logout-btn">Salir de la room</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const empleado = ref(null)

onMounted(() => {
  const stored = localStorage.getItem('empleado')
  if (stored) {
    empleado.value = JSON.parse(stored)
  } else {
    router.push('/loginEmpleado')
  }
})

function cerrarSesion() {
  localStorage.removeItem('empleado')
  router.push('/loginEmpleado')
}
</script>

<style scoped>
.acceso-page {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #14532d, #22c55e, #86efac);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.acceso-card {
  background: rgba(240, 253, 244, 0.85);
  border: 2px solid #166534;
  border-radius: 20px;
  padding: 40px 60px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  color: #14532d;
}

h1 {
  font-size: 2em;
  margin-bottom: 15px;
}

p {
  font-size: 1.1em;
  margin-bottom: 25px;
}

.logout-btn {
  background: #166534;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}

.logout-btn:hover {
  background: #22c55e;
  transform: scale(1.05);
}
</style>
