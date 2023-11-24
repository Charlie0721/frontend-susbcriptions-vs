<template>
    <Navbar />
        <br>
        <div class="container">
            <div class="card">
                <div class="card-tittle">
                    <h4 class="card-title  text-center" style="color: rgb(130, 35, 13);">Consultar estado </h4>
                </div>
                <div class="card-body">
                    <select class="form-select" aria-label="Default select example" v-model="check"
                        @change="checkSubscriptionsComponent.check">
                        <option :value=1>Activos</option>
                        <option :value=0>Inactivos</option>
                    </select>
                </div>
            </div>
            <br>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col" v-for="(subscription, index) in checkSubscriptionsStore.checkSubscriptions"
                    :key="subscription.subscriptionId">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title" style="color: rgb(130, 35, 13);">{{ index + 1 }}.  {{ subscription.businessname }}</h5>
                            <h6 class="card-subtitle" style="color: rgb(130, 35, 13);">{{ subscription.nit
                            }}</h6>
                            <p class="card-text" style="color: rgb(130, 35, 13);">{{ subscription.initial_time }}</p>
                            <p class="card-text" style="color: rgb(130, 35, 13);">{{ subscription.final_time }}</p>
                            <p class="card-text" style="color: rgb(130, 35, 13);">{{ subscription.isActive ? 'Activo' :
                                'Inactivo' }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import Navbar from '../../components/Navbar.vue';
import { useCheckSubscriptionStore } from '../store/checkActiveSubscriptions.store'
const checkSubscriptionsStore = useCheckSubscriptionStore()
const check = ref<number>(1);

class CheckSubscriptionsComponent {
    async check() {
        await this.handleCheckChange()
    }
    async handleCheckChange() {
        const valueToSend = check.value;
        return await checkSubscriptionsStore.get(valueToSend);

    }

}

const checkSubscriptionsComponent = new CheckSubscriptionsComponent();
</script>
<style scoped>

.card {
    margin-bottom: 20px;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.card-body {
    padding: 1.25rem;
}

.card-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.75rem;
}

.card-subtitle {
    font-size: 1rem;
    color: #6c757d;
    margin-bottom: 0.5rem;
}

.card-text {
    color: #6c757d;
    margin-bottom: 0.5rem;
    font-size: 1rem;
}

/* .gradient-custom {

    background: -webkit-linear-gradient(to right, rgba(130, 35, 13, 1));
    background: linear-gradient(to right, rgba(130, 35, 13, 1), rgba(130, 35, 13, 1))
} */
</style>