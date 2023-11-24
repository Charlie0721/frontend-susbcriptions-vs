import { defineStore } from 'pinia';
import { CheckActiveSubscriptionsService } from '../services/ActiveSubscriptions.service'
import { CheckActiveSubscriptionInterface } from '../interfaces/CheckActiveSubscription.interface';
const checkActiveSubscriptionsService = new CheckActiveSubscriptionsService();

export const useCheckSubscriptionStore = defineStore('checkSubscriptionStore', {
    state: () => {

        return {
            checkSubscriptions: [] as Array<CheckActiveSubscriptionInterface>,
            check: 1 as number,
            noData: "" as string
        }

    },
    actions: {

        async get(check: number) {
            try {

                this.check = check;
                const response = await checkActiveSubscriptionsService.check(this.check)
                if (response.data === 0) {
                    this.noData = "¡No existen suscripciones en el sistema registradas !"
                    return
                }
                return this.checkSubscriptions = response.data
            } catch (error) {
                console.log(error)
            }

        }

    }

})