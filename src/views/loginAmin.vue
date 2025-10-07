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
import FormularioLogin from '@/components/FormularioLogin.vue'
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
body{
    margin: 0;
    margin-left: 0;
}
.login-page {
  margin: 0;
  margin-left: 0;
  overflow: hidden;
  height: 100vh; /* Ocupa toda la altura de la ventana */
  width: 100vw; /* Ocupa todo el ancho */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Quita scroll */
  background: linear-gradient(135deg, #31ff3b 0%, #00ffaa 40%, #22ff77 100%);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
