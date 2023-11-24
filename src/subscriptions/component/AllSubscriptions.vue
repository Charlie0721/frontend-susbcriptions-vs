<template>
  <Navbar />
  <div class="container my-4">
    <p class="h1 text-center">Todas las suscripciones</p>
    <div class="mb-4">
      <input type="text" class="form-control" placeholder="Buscar por Razon Social" v-model="searchBusinessName" />
    </div>
    <div class="mt-4">
      <input type="text" class="form-control" placeholder="Buscar por Nit" v-model="searchNit" />
    </div><br>
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
        <tr v-for="( subscpritor, index) in filteredSubscriptions " :key="subscpritor.subscriptionId">
          <td class="fs-6">{{ index + 1 }}</td>
          <td class="fs-6">{{ subscpritor.businessname }}</td>
          <td class="fs-6">{{ subscpritor.nit }}</td>
          <td class="fs-6">{{ subscpritor.initial_time }}</td>
          <td class="fs-6">{{ subscpritor.final_time }}</td>
          <td class="fs-6">
            <button class="btn btn-dark"   @click="allSusbcriptionsComponent.editData(subscpritor.uuid)">Editar <i class="bi bi-pencil-square"></i></button>
            <button class="btn btn-dark" @click="allSusbcriptionsComponent.goToInformation(subscpritor.uuid)">Info <i
                class="bi bi-eye-fill"></i></button>
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
        <tr v-for="( expiringSubscpritor, index) in allSuscriptionStore.expiringSubscriptions"
          :key="expiringSubscpritor.subscriptionId">
          <td class="fs-6">{{ index + 1 }}</td>
          <td class="fs-6">{{ expiringSubscpritor.businessname }}</td>
          <td class="fs-6">{{ expiringSubscpritor.nit }}</td>
          <td class="fs-6">{{ expiringSubscpritor.daysLeft + " dias" }}</td>
        </tr>
      </tbody>


    </table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'
import Navbar from '../../components/Navbar.vue';
import { useAllSuscriptionsStore } from '../store/allSusbcriptions.store';
import router from '../../router/index';
const allSuscriptionStore = useAllSuscriptionsStore()
onMounted(async () => {
  await allSusbcriptionsComponent.getSubscriptions()
})

const searchBusinessName = ref(''); // Initialize the 'searchBusinessName' variable
const searchNit = ref('');

class AllSusbcriptionsComponent {

  async getSubscriptions() {
    return await allSuscriptionStore.getAll()
  }

  goToInformation(uuid: string) {
    router.push(`/subscriber-information/${uuid}`)

  }
  editData(uuid: string) {
    router.push(`/edit/${uuid}`)
  }

}
const allSusbcriptionsComponent = new AllSusbcriptionsComponent()

const filteredSubscriptions = computed(() => {
  const businessNameFilter = searchBusinessName.value.toLowerCase();
  const nitFilter = searchNit.value.toLowerCase();

  return allSuscriptionStore.allSubscriptions.filter((subscriber: any) => {
    const businessNameMatch = subscriber.businessname.toLowerCase().includes(businessNameFilter);
    const nitMatch = subscriber.nit.toLowerCase().includes(nitFilter);

    return businessNameMatch && nitMatch;
  });
});
</script>
<style scoped>
/* Estilos generales para las tablas */
.table-container {
  overflow-x: auto; /* Agregado: permitir el desplazamiento horizontal en dispositivos pequeños */
  border: 1px solid rgb(130, 35, 13);
}

.table {
  width: 100%;
  color: rgb(130, 35, 13);
  border-collapse: collapse;
  font-family: 'Roboto', sans-serif;
}

.table th,
.table td {
  padding: 1rem;
  vertical-align: middle;
  text-align: center;
  border: 1px solid rgb(130, 35, 13);
  font-family: 'Roboto', sans-serif;
}

.table thead th {
  background-color: rgb(130, 35, 13);
  color: #fff;
  border-color: rgb(130, 35, 13);
}

/* Estilos para las filas impares */
.table tbody tr:nth-child(odd) {
  background-color: #f8f9fa;
}

/* Estilos para los botones de acción */
.btn-dark {
  background-color: rgb(130, 35, 13);
  color: #fff;
  border: 1px solid rgb(130, 35, 13);
  transition: background-color 0.3s ease;
}

.btn-dark:hover {
  background-color: #8c250d;
  border: 1px solid #8c250d;
}

/* Estilos para los títulos */
.h1 {
  color: rgb(130, 35, 13);
  font-family: 'Roboto', sans-serif;
}

/* Añadido: Estilos específicos para dispositivos pequeños */
@media (max-width: 768px) {
  .table {
    display: block;
  }

  .table thead,
  .table tbody,
  .table th,
  .table td,
  .table tr {
    display: block;
  }

  .table tbody tr {
    margin-bottom: 10px;
  }

  .table tbody td {
    text-align: left;
    padding-left: 15px;
    border: none;
  }
}
</style>


