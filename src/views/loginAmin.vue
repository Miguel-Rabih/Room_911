<template>
  <div class="login-page">
    <FormularioLogin
      titulo="Acceso Administrativo - Room 911"
      textoBoton="Iniciar Sesión"
      @login="procesarLoginAdmin"
    />
  </div>
</template>

<script setup>
import FormularioLogin from '@/components/formularioLogin.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

async function procesarLoginAdmin(datos) {
  try {
    if (datos.identificacion === '1234567890' && datos.contrasena === '123456') {
      const fakeResponse = {
        data: { nombre: 'Administrador Principal', rol: 'ADMIN' },
        status: 200,
      }

      localStorage.setItem('admin', JSON.stringify(fakeResponse.data))
      router.push('/dashboardAdmin')
    } else {
      alert('Credenciales incorrectas')
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error)
  }
}
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #0f172a, #1e293b, #334155);
  background-size: 300% 300%;
  animation: gradientMove 6s ease infinite;
  font-family: 'Poppins', sans-serif;
}

@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Estilos del formulario (contenedor del componente FormularioLogin) */
.login-page .formulario-login {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem 3rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  color: #fff;
  width: 100%;
  max-width: 400px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.login-page .formulario-login:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

/* Título dentro del formulario */
.login-page h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #e2e8f0;
  letter-spacing: 1px;
  font-weight: 600;
}

/* Botón */
.login-page button {
  width: 100%;
  padding: 0.8rem;
  background-color: #2563eb;
  border: none;
  color: white;
  font-size: 1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}

.login-page button:hover {
  background-color: #1d4ed8;
  transform: translateY(-2px);
}

/* Inputs */
.login-page input {
  width: 100%;
  padding: 0.7rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  border: 1px solid #94a3b8;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  outline: none;
  transition: border-color 0.3s ease;
}

.login-page input:focus {
  border-color: #60a5fa;
}

/* Mensajes o alertas */
.login-page .error-message {
  color: #f87171;
  text-align: center;
  margin-top: 0.5rem;
  font-size: 0.9rem;
}
</style>
