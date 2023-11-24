import { defineStore } from 'pinia';
import { CreateSubscriptionInterface } from '../interfaces/CreateSubscription.interface';
import { CreateSuscriptionService } from '../services/createSubscription.service';

const createSubscriptionService = new CreateSuscriptionService()

export const useCreateSubscriptionStore = defineStore('createSubscriptionStore', {

    state: () => {
        return {
            createSubscription: {} as CreateSubscriptionInterface
        }
    },
    actions: {
     async create(subscription: CreateSubscriptionInterface) {
            this.createSubscription = subscription
            try {
                const response = await createSubscriptionService.create(this.createSubscription)
                return response
            } catch (error) {
                console.log(error)
            }

        }
    }


})
