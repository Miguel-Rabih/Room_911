<template>
  <div class="login-page">
    <div class="login-card">
      <h2 class="login-title">Acceso Empleado - Room 911</h2>

      <form @submit.prevent="procesarLoginEmpleado" class="login-form">
        <div class="form-group">
          <label>Identificación</label>
          <input
            type="text"
            v-model="identificacion"
            maxlength="10"
            @input="soloNumeros"
            placeholder="Ingresa tu identificación"
            required
          />
        </div>

        <div class="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            v-model="contrasena"
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>

        <div class="form-group">
          <label>Selecciona Room</label>
          <select v-model="roomSeleccionada" required>
            <option disabled value="">Seleccione una Room</option>
            <option v-for="room in rooms" :key="room.id" :value="room.nombre">
              {{ room.nombre }}
            </option>
          </select>
        </div>

        <button type="submit" class="login-btn">Iniciar Sesión</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const identificacion = ref('')
const contrasena = ref('')
const roomSeleccionada = ref('')
const rooms = ref([])

onMounted(() => {
  // ⚙️ Aquí luego puedes consumir tu API para cargar las rooms
  rooms.value = [
    { id: 1, nombre: 'Room 101' },
    { id: 2, nombre: 'Room 202' },
    { id: 3, nombre: 'Room 303' },
  ]
})  

function soloNumeros() {
  identificacion.value = identificacion.value.replace(/[^0-9]/g, '')
}

function procesarLoginEmpleado() {
  if (identificacion.value === '1234567890' && contrasena.value === '123456') {
    const empleado = {
      nombre: 'Empleado Room 911',
      room: roomSeleccionada.value,
    }
    localStorage.setItem('empleado', JSON.stringify(empleado))
    router.push('/accesEmploye')
  } else {
    alert('Credenciales incorrectas')
  }
}
</script>

<style scoped>
.login-page {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #005d9f 0%, #0b129a 40%, #00b4d8 100%);
  overflow: hidden;
}

.login-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  padding: 40px;
  width: 100%;
  max-width: 380px;
  color: #f1f5f9;
  text-align: center;
  animation: fadeIn 0.6s ease-in-out;
}

.login-title {
  font-size: 1.6em;
  font-weight: 600;
  margin-bottom: 25px;
  color: #ffffff;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

label {
  display: block;
  font-size: 0.9em;
  color: #e2e8f0;
  margin-bottom: 5px;
  text-align: left;
}

input,
select {
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  border: none;
  background: rgba(255, 255, 255, 0.15);
  color: #f1f5f9;
  font-size: 0.95em;
  outline: none;
  transition: 0.2s;
}

input:focus,
select:focus {
  background: rgba(255, 255, 255, 0.25);
}

.login-btn {
  background: linear-gradient(90deg, #11af00, #28d8ff);
  color: #ffffff;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  padding: 12px;
  cursor: pointer;
  transition: 0.3s;
}

.login-btn:hover {
  color: #4d4d4d;
  transform: scale(1.03);
  background: linear-gradient(90deg, #c4ce07, #28d8ff);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
