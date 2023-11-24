<template>
    <NavBar />

    <section class="vh-100 gradient-custom">
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card bg-dark text-white" style="border-radius: 1rem;">
                        <div class="card-body p-5 text-center">
                            <div class="mb-md-5 mt-md-4 pb-5">
                                <h2 class="fw-bold mb-2 text-uppercase">Editar Suscripción</h2>
                                <form @submit.prevent="updateSubscriptionComponent.update">
                                    <div class="form-outline form-white mb-4">
                                        <input type="text" class="form-control form-control-lg"
                                            v-model="updateData.businessname" required />
                                        <label class="form-label" for="typeEmailX">Razon Social</label>
                                        <input type="text" id="typeEmailX" class="form-control form-control-lg"
                                            v-model="updateData.nit" required />
                                        <label class="form-label" for="typeEmailX">nit</label>
                                        <input type="date" class="form-control form-control-lg"
                                            v-model="updateData.initial_time" required />
                                        <label class="form-label" for="typePasswordX">Fecha Inicial</label> <input
                                            type="date" class="form-control form-control-lg" v-model="updateData.final_time"
                                            required />
                                        <label class="form-label" for="typePasswordX">Fecha Final</label>
                                        <select class="form-select form-select-lg mb-3" aria-label="Large select example"
                                            v-model="updateData.isActive">
                                            <option :value=true>Activo</option>
                                            <option :value=false>Inactivo</option>
                                        </select>
                                    </div>

                                    <button class="btn btn-outline-light btn-lg px-5" type="submit">Editar</button>
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
import { ref, onBeforeMount } from 'vue';
import NavBar from '../../components/Navbar.vue'
import { useRoute } from 'vue-router';
import { useUpdateSubscriptionStore } from '../store/updateSubscription.store';
import { UpdateSubscriptionInterface } from '../interfaces/UpdateSubscription.interface';
const updateSubscriptionStore = useUpdateSubscriptionStore();
import Swal from 'sweetalert2';
import router from '../../router/index';
const route = useRoute();
const updateData = ref<UpdateSubscriptionInterface>({

    businessname: undefined,
    nit: undefined,
    initial_time: undefined,
    final_time: undefined,
    isActive: undefined,
    uuid: undefined,

})
onBeforeMount(async () => {
    await updateSubscriptionComponent.getOne()
})
class UpdateSubscriptionComponent {

    private uuid: string = route.params.uuid.toString();
    async getOne() {
        const response = await updateSubscriptionStore.getOne(this.uuid)
        updateData.value = { ...response }

    }
    async update() {
        const response = await updateSubscriptionStore.update(this.uuid, updateData.value)
        console.log(response);

        if (updateSubscriptionStore.status === 200) {
            Swal.fire({
                title: '¡Confirmacion!',
                text: `${updateSubscriptionStore.subscriptor.businessname} actualizado satisfactoriamente !`,
                icon: 'success',
                confirmButtonText: 'Aceptar'
            })
            setTimeout(() => router.push(`/all-subscriptions`), 2000)

        } else {

            return Swal.fire({
                title: 'Atencion!',
                text: 'No se pudo actualizar !',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        }
    }

}
const updateSubscriptionComponent = new UpdateSubscriptionComponent()

</script>
<style scoped>
.gradient-custom {
    background: #6a11cb;
    background: -webkit-linear-gradient(to right, rgba(130, 35, 13, 1));
    background: linear-gradient(to right, rgba(130, 35, 13, 1), rgba(130, 35, 13, 1))
}
</style>