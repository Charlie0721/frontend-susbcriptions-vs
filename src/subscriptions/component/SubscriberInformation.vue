<template>
    <Navbar />
    <section class="vh-100 gradient-custom">
    <div class="container ">

            <h2 class="h2 text-center text-light">Datos de la suscripción</h2>
            <div class="card border-primary mb-3">
                <div class="card-body">
                    <h5 class="card-title  text-center" style="color: rgb(130, 35, 13);"> {{ getDataStore.subscriptor.businessname }}</h5>
                    <p class="card-text" style="color: rgb(130, 35, 13);">
                        Nit: {{ getDataStore.subscriptor.nit }}
                    </p>
                    <p class="card-text" style="color: rgb(130, 35, 13);">
                        Fecha Inicial: {{ getDataStore.subscriptor.initial_time }}
                    </p>
                    <p class="card-text" style="color: rgb(130, 35, 13);">
                        Fecha Final: {{ getDataStore.subscriptor.final_time }}
                    </p>
                    <p class="card-text" style="color: rgb(130, 35, 13);">Estado de la suscripción: {{ getDataStore.subscriptor.isActive ? 'Activo' :
                        'Inactivo' }}</p>
                </div>
            </div>
           
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '../../components/Navbar.vue';
const route = useRoute();
import { useGetData } from '../store/dataSubscriptor.store'
const getDataStore = useGetData()
onMounted(async () => {
    await getDataSubscriptorComponent.getOne()
})


class GetDataSubscriptorComponent {

    private uuid: string = route.params.uuid.toString();
    async getOne() {
        return await getDataStore.getOne(this.uuid);
    }
}

const getDataSubscriptorComponent = new GetDataSubscriptorComponent()

</script>
<style scoped>
body {
    font-family: 'Poppins', sans-serif;
    background-color: #f8f9fa;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.container {
    max-width: 800px;
    /* Ajusta el ancho máximo según tus necesidades */
}

.card {
    border: 1px solid #e2e8f0;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.card-body {
    padding: 2.5rem;
}

.card-title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    text-align: center;
}

.card-text {
    color: #6c757d;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
}
.gradient-custom {
    background: #6a11cb;
    background: -webkit-linear-gradient(to right, rgba(130, 35, 13, 1));
    background: linear-gradient(to right, rgba(130, 35, 13,1), rgba(130, 35, 13, 1))
}
</style>