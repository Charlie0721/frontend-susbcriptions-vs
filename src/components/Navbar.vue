<template>
  <nav class="navbar navbar-dark bg-dark border-bottom border-body" data-bs-theme="dark">
    <div class="container-fluid">
      <router-link to="/all-subscriptions" class="navbar-brand text-light">Suscripciones tienda virtual</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/all-subscriptions" class="nav-link text-light" aria-current="page">Todas las suscripciones</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/subscriptions/active-inactive" class="nav-link text-light">Suscripciones activas o inactivas</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/create-customer" class="nav-link text-light">Crear Suscripción</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link text-light">Cerrar Sesión</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
</script>
