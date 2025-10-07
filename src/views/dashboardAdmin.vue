<template>
  <div class="dashboard-admin">
    <header class="header">
      <h1>Panel de Administración</h1>
      <button @click="cerrarSesion">Cerrar sesión</button>
    </header>

    <div class="tabs">
      <button :class="{ active: tab === 'empleados' }" @click="tab = 'empleados'">Empleados</button>
      <button :class="{ active: tab === 'rooms' }" @click="tab = 'rooms'">Habitaciones</button>
      <button :class="{ active: tab === 'departamentos' }" @click="tab = 'departamentos'">Departamentos</button>
    </div>

    <div class="contenido">
      <!-- 📋 TAB EMPLEADOS -->
      <div v-if="tab === 'empleados'">
        <h2>Lista de Empleados</h2>
        <button @click="mostrarFormularioEmpleado = !mostrarFormularioEmpleado">
          {{ mostrarFormularioEmpleado ? 'Cancelar' : '➕ Nuevo Empleado' }}
        </button>

        <form v-if="mostrarFormularioEmpleado" @submit.prevent="crearEmpleado">
          <input v-model="nuevoEmpleado.nombre" placeholder="Nombre" required />
          <input v-model="nuevoEmpleado.identificacion" placeholder="Identificación" required />
          <button type="submit">Guardar</button>
        </form>

        <ul>
          <li v-for="emp in empleados" :key="emp.id">
            {{ emp.nombre }} ({{ emp.identificacion }})
          </li>
        </ul>
      </div>

      <!-- 🏠 TAB ROOMS -->
      <div v-if="tab === 'rooms'">
        <h2>Habitaciones</h2>
        <button @click="mostrarFormularioRoom = !mostrarFormularioRoom">
          {{ mostrarFormularioRoom ? 'Cancelar' : '➕ Nueva Room' }}
        </button>

        <form v-if="mostrarFormularioRoom" @submit.prevent="crearRoom">
          <input v-model="nuevaRoom.nombre" placeholder="Nombre de la Room" required />
          <button type="submit">Guardar</button>
        </form>

        <ul>
          <li v-for="room in rooms" :key="room.id">{{ room.nombre }}</li>
        </ul>
      </div>

      <!-- 🏢 TAB DEPARTAMENTOS -->
      <div v-if="tab === 'departamentos'">
        <h2>Departamentos</h2>
        <button @click="mostrarFormularioDept = !mostrarFormularioDept">
          {{ mostrarFormularioDept ? 'Cancelar' : '➕ Nuevo Departamento' }}
        </button>

        <form v-if="mostrarFormularioDept" @submit.prevent="crearDepartamento">
          <input v-model="nuevoDept.nombre" placeholder="Nombre del Departamento" required />
          <button type="submit">Guardar</button>
        </form>

        <ul>
          <li v-for="dep in departamentos" :key="dep.id">{{ dep.nombre }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const tab = ref('empleados')

// Estados
const empleados = ref([])
const rooms = ref([])
const departamentos = ref([])

// Formularios
const mostrarFormularioEmpleado = ref(false)
const mostrarFormularioRoom = ref(false)
const mostrarFormularioDept = ref(false)

const nuevoEmpleado = ref({ nombre: '', identificacion: '' })
const nuevaRoom = ref({ nombre: '' })
const nuevoDept = ref({ nombre: '' })

// 🧠 Cargar datos iniciales
onMounted(() => {
  cargarEmpleados()
  cargarRooms()
  cargarDepartamentos()
})

// 📥 Funciones para consumir el API
async function cargarEmpleados() {
  const res = await axios.get('http://localhost:8080/users')
  empleados.value = res.data
}

async function cargarRooms() {
  const res = await axios.get('http://localhost:8080/rooms')
  rooms.value = res.data
}

async function cargarDepartamentos() {
  const res = await axios.get('http://localhost:8080/departments')
  departamentos.value = res.data
}

// ➕ Crear registros
async function crearEmpleado() {
  await axios.post('http://localhost:8080/users', nuevoEmpleado.value)
  nuevoEmpleado.value = { nombre: '', identificacion: '' }
  mostrarFormularioEmpleado.value = false
  cargarEmpleados()
}

async function crearRoom() {
  await axios.post('http://localhost:8080/room', nuevaRoom.value)
  nuevaRoom.value = { nombre: '' }
  mostrarFormularioRoom.value = false
  cargarRooms()
}

async function crearDepartamento() {
  await axios.post('http://localhost:8080/department', nuevoDept.value)
  nuevoDept.value = { nombre: '' }
  mostrarFormularioDept.value = false
  cargarDepartamentos()
}

function cerrarSesion() {
  localStorage.removeItem('employee')
  router.push('/')
}
</script>

<style scoped>
.dashboard-admin {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(135deg, #ff6b6b, #b30000);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  width: 100%;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tabs {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

.tabs button {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}

.tabs button.active {
  background: #fff;
  color: #b30000;
}

.contenido {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 30px;
  width: 80%;
  margin-top: 20px;
  overflow-y: auto;
  max-height: 70vh;
}

input, select, button {
  margin: 5px;
  padding: 10px;
  border-radius: 8px;
  border: none;
}

form button {
  background: #fff;
  color: #b30000;
  cursor: pointer;
}
</style>
