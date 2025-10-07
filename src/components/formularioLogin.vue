<template>
  <div class="login-card">
    <h2 class="login-title">{{ titulo }}</h2>

    <form @submit.prevent="enviarFormulario" class="login-form">
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
        <p v-if="errorIdentificacion" class="error-text">{{ errorIdentificacion }}</p>
      </div>

      <div class="form-group">
        <label>Contraseña</label>
        <input
          type="password"
          v-model="contrasena"
          placeholder="Ingresa tu contraseña"
          required
        />
        <p v-if="errorContrasena" class="error-text">{{ errorContrasena }}</p>
      </div>

      <button type="submit" class="login-btn">{{ textoBoton }}</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  titulo: String,
  textoBoton: String,
})

const emit = defineEmits(['login'])

const identificacion = ref('')
const contrasena = ref('')
const errorIdentificacion = ref('')
const errorContrasena = ref('')

function soloNumeros() {
  identificacion.value = identificacion.value.replace(/[^0-9]/g, '')
}

function validarFormulario() {
  errorIdentificacion.value = ''
  errorContrasena.value = ''

  if (identificacion.value.length !== 10) {
    errorIdentificacion.value = 'La identificación debe tener exactamente 10 números.'
  }

  if (contrasena.value.length < 6) {
    errorContrasena.value = 'La contraseña debe tener al menos 6 caracteres.'
  }

  return !errorIdentificacion.value && !errorContrasena.value
}

function enviarFormulario() {
  if (validarFormulario()) {
    emit('login', { identificacion: identificacion.value, contrasena: contrasena.value })
  }
}
</script>

<style scoped>

:global(html, body) {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: none;
}
/* Fondo del contenedor */
.login-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  padding: 40px;
  width: 100%;
  max-width: 380px;
  color: #e2e8f0;
  text-align: center;
  animation: fadeIn 0.6s ease-in-out;
}

/* Título */
.login-title {
  font-size: 1.6em;
  font-weight: 600;
  margin-bottom: 25px;
  color: #ffffff;
}

/* Campos del formulario */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-group {
  text-align: left;
}

label {
  display: block;
  font-size: 0.9em;
  color: #ffffff;
  margin-bottom: 5px;
}

input {
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

input:focus {
  background: #ffffff;
}

/* Botón */
.login-btn {
  background-color: #02c9a8;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  padding: 12px;
  cursor: pointer;
  transition: 0.3s;
}

.login-btn:hover {
  transform: scale(1.03);
  background-color: #1cffd9;
}

/* Errores */
.error-text {
  font-size: 0.8em;
  color: #ef4444;
  margin-top: 4px;
}

/* Animación */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
