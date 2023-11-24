import { defineStore } from 'pinia';
import { AllSubscriptionsService } from '../services/AllSuscriptions.service';
const allSubscriptionsService = new AllSubscriptionsService();
export const useAllSuscriptionsStore = defineStore('suscriptonStore', {

  state: () => {

    return {
      allSubscriptions: [] as any,
      expiringSubscriptions: [] as any,
    }

  },
  actions: {

    async getAll() {
      try {
        const response = await allSubscriptionsService.getAll();
        this.allSubscriptions = response.data.subscriptors
        this.expiringSubscriptions = response.data.subscriptions_about_to_expire
        return {
          susbcriptions: this.allSubscriptions,
          toexpire: this.expiringSubscriptions
        }
      } catch (error) {
        console.log(error);

      }

    }


  }

})