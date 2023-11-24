<template>
    <Navbar />
    <section class="vh-100 gradient-custom">
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card bg-dark text-white" style="border-radius: 1rem;">
                        <div class="card-body p-5 text-center">
                            <div class="mb-md-5 mt-md-4 pb-5">
                                <h2 class="fw-bold mb-2 text-uppercase">Crear Suscripción</h2>
                                <form @submit.prevent="createSusbscriptionComponent.createSubscription">
                                    <div class="form-outline form-white mb-4">
                                        <input type="text" class="form-control form-control-lg"
                                            v-model="subscriptionData.businessname" required />
                                        <label class="form-label" for="typeEmailX">Razon Social</label>
                                        <input type="text" id="typeEmailX" class="form-control form-control-lg"
                                            v-model="subscriptionData.nit" required />
                                        <label class="form-label" for="typeEmailX">nit</label>
                                        <input type="date" class="form-control form-control-lg"
                                            v-model="subscriptionData.initial_time" required />
                                        <label class="form-label" for="typePasswordX">Fecha Inicial</label> <input
                                            type="date" class="form-control form-control-lg"
                                            v-model="subscriptionData.final_time" required />
                                        <label class="form-label" for="typePasswordX">Fecha Final</label>
                                        <select class="form-select form-select-lg mb-3" aria-label="Large select example"
                                            v-model="subscriptionData.isActive">
                                            <option :value=true>Activo</option>
                                            <option :value=false>Inactivo</option>
                                        </select>
                                    </div>
                                
                                    <button class="btn btn-outline-light btn-lg px-5" type="submit">Guardar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
    
<script setup lang="ts">
import { reactive } from 'vue';
import Navbar from '../../components/Navbar.vue';
import { v4 as uuidv4 } from 'uuid';
import { useCreateSubscriptionStore } from '../store/createSusbscription.store';
import { CreateSubscriptionInterface } from '../interfaces/CreateSubscription.interface';
import Swal from 'sweetalert2';
import router from '../../router/index';
const createSubscriptionStore = useCreateSubscriptionStore();
const subscriptionData = reactive<CreateSubscriptionInterface>({

    businessname: "",
    nit: "",
    initial_time: "",
    final_time: "",
    isActive: true,
    uuid: uuidv4()

})

class CreateSubscriptionComponent {

    async createSubscription() {
        const response: any = await createSubscriptionStore.create(subscriptionData)

        if (response.data.status === 409) {
            await Swal.fire({
                title: '¡Warning!',
                text: `${response.data.message}`,
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            });
            return
        }
        await Swal.fire({
            title: '¡Exito!',
            text: `Se ha creado la suscripción exitosamente`,
            icon: 'success',
            cancelButtonText: 'Aceptar'
        });
        router.push(`/all-subscriptions`)
    }
}
const createSusbscriptionComponent = new CreateSubscriptionComponent()

</script>

<style scoped>
.gradient-custom {
    background: #6a11cb;
    background: -webkit-linear-gradient(to right, rgba(130, 35, 13, 1));
    background: linear-gradient(to right, rgba(130, 35, 13, 1), rgba(130, 35, 13, 1))
}
</style>