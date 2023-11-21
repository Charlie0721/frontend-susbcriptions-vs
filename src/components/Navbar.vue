<template>

<nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
  <div class="container-fluid">
    <p class="navbar-brand" >Suscripciones tienda virtual</p>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" ><router-link to="/all-subscriptions"> Todas las suscripciones</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" ><router-link to="/subscriptions/active-inactive"> Suscripciones activas o inactivas</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" ><router-link to="/create-customer"> Crear Suscripción</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link "><router-link to="/"> Cerrar Sesión</router-link></a>
        </li>
      </ul>
    </div>
  </div>
</nav>


</template>
<script setup lang="ts">


</script>