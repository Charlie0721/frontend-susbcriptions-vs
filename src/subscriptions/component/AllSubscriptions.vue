<template>
    <Navbar />
<div class="container my-4">
    <p class="h1 text-center">Todas las suscripciones</p>
    <table class="table table-bordered table-responsive">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Razon Social</th>
      <th scope="col">Nit</th>
      <th scope="col">Fecha Inicial</th>
      <th scope="col">Fecha Final</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="( subscpritor, index) in allSuscriptionStore.allSubscriptions" :key="subscpritor.subscriptionId">
      <td class="fs-6">{{ index + 1 }}</td>
      <td class="fs-6">{{subscpritor.businessname}}</td>
      <td class="fs-6">{{subscpritor.nit}}</td>
      <td class="fs-6">{{subscpritor.initial_time}}</td>
      <td class="fs-6">{{subscpritor.final_time}}</td>
      <td class="fs-6">
        <button class="btn btn-warning" >Editar <i class="bi bi-pencil-square"></i></button>
        <button class="btn btn-dark">Info <i class="bi bi-eye-fill"></i></button>
      </td>
    </tr>
 
  </tbody>

</table>
<p class="h1 text-center">Suscripciones proximas a vencer</p>
<table class="table table-bordered table-responsive">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Razon Social</th>
      <th scope="col">Nit</th>
      <th scope="col">Dias Restantes</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="( expiringSubscpritor, index) in allSuscriptionStore.expiringSubscriptions" :key="expiringSubscpritor.subscriptionId">
        <td class="fs-6">{{index+1}}</td>
        <td class="fs-6">{{expiringSubscpritor.businessname}}</td>
        <td class="fs-6">{{expiringSubscpritor.nit}}</td>
        <td class="fs-6">{{expiringSubscpritor.daysLeft + " dias"}}</td>
    </tr>
  </tbody>


</table>
</div>

</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Navbar from '../../components/Navbar.vue';
import { useAllSuscriptionsStore } from '../store/allSusbcriptions.store';
const allSuscriptionStore = useAllSuscriptionsStore()
onMounted(async () => {
    await allSusbcriptionsComponent.getSubscriptions()
})

class AllSusbcriptionsComponent {

    async getSubscriptions() {
        return await allSuscriptionStore.getAll()
    }
}
const allSusbcriptionsComponent = new AllSusbcriptionsComponent()

</script>

<style scoped>

</style>