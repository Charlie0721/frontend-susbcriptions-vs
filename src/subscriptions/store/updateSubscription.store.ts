import { defineStore } from 'pinia';
import { UpdateSubscriptionService } from '../services/UpdateSubscription.service';
import { UpdateSubscriptionInterface } from '../interfaces/UpdateSubscription.interface';
import { GetSubscriptorDataInterface } from '../interfaces/GetSubscriptorData.interface';
import { GetDataSubscribe } from '../services/SubcsribeInformation.service'
const getDataSubscribe = new GetDataSubscribe();
const updateSubscriptionService = new UpdateSubscriptionService();

export const useUpdateSubscriptionStore = defineStore('updateSubscriptionStore', {

    state: () => {
        return {
            updateSubcription: {} as UpdateSubscriptionInterface,
            subscriptor: {} as GetSubscriptorDataInterface,
            uuid: '' as string,
            status: 0 as number
        }
    },
    actions: {
        async getOne(uuid: string) {
            try {
                this.uuid = uuid
                const response = await getDataSubscribe.getOne(this.uuid)
                this.subscriptor = response.data.subscription
                return this.subscriptor
            } catch (error) {
                console.log(error);
            }
        },
        async update(uuid: string, data: UpdateSubscriptionInterface){

            this.uuid= uuid;
            this.updateSubcription= data;
            try {
                
              const response= await updateSubscriptionService.update(this.uuid, this.updateSubcription)
              return this.status=response.status             

            } catch (error) {
                console.log(error)
            }
        }
    }

})