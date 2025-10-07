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
          <select v-model="roomSeleccionada" required class="room-select">
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
    localStorage.setItem('empleado', JSON.stringify(empleado));
    router.push('/accesEmploye');
  } else {
    alert('Credenciales incorrectas')
  }
}
</script>

<style scoped>
/* --- FONDO ADMINISTRATIVO --- */
.login-page {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  font-family: "Poppins", sans-serif;
  color: #e2e8f0;
}

/* --- TARJETA PRINCIPAL --- */
.login-card {
  background: #ffffff10;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 18px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  padding: 45px 40px;
  max-width: 420px;
  width: 100%;
  animation: fadeIn 0.6s ease-in-out;
  text-align: center;
}

/* --- TITULO --- */
.login-title {
  font-size: 1.8em;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 30px;
  border-bottom: 2px solid #38bdf8;
  display: inline-block;
  padding-bottom: 8px;
}

/* --- FORMULARIO --- */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* --- LABEL --- */
label {
  display: block;
  font-size: 0.9em;
  color: #cbd5e1;
  text-align: left;
  margin-bottom: 6px;
}

/* --- CAMPOS DE ENTRADA --- */
input,
select {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: #f8fafc;
  font-size: 0.95em;
  outline: none;
  transition: all 0.3s ease;
}

input:focus,
select:focus {
  border-color: #38bdf8;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 8px rgba(56, 189, 248, 0.5);
}

/* --- BOTÓN DE LOGIN --- */
.login-btn {
  background: linear-gradient(90deg, #38bdf8, #0284c7);
  border: none;
  border-radius: 10px;
  padding: 12px;
  color: #ffffff;
  font-weight: 600;
  font-size: 1em;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.login-btn:hover {
  transform: translateY(-2px);
  background: linear-gradient(90deg, #0284c7, #38bdf8);
  box-shadow: 0 6px 20px rgba(56, 189, 248, 0.3);
}

/* --- NUEVO: ESTILO BONITO PARA LA PARTE DE ROOM --- */
.room-select {
  appearance: none;
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.3);
  border-radius: 10px;
  color: #e2e8f0;
  font-weight: 500;
  padding: 12px;
  transition: 0.3s ease;
  position: relative;
}

.room-select:hover {
  background: rgba(56, 189, 248, 0.2);
  border-color: #38bdf8;
}

.room-select:focus {
  outline: none;
  background: rgba(56, 189, 248, 0.25);
  box-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
}

/* Opciones visibles */
.room-select option {
  background: #1e293b;
  color: #f8fafc;
  padding: 10px;
  font-weight: 500;
}

/* Animación de despliegue */
.room-select option:hover {
  background: #38bdf8;
  color: #0f172a;
}

/* --- ANIMACIÓN DE APARICIÓN --- */
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

```
