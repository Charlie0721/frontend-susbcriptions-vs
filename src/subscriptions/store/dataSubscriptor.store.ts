import { defineStore } from 'pinia';
import { GetDataSubscribe } from '../services/SubcsribeInformation.service'
import { GetSubscriptorDataInterface } from '../interfaces/GetSubscriptorData.interface'
const getDataSubscribe = new GetDataSubscribe();

export const useGetData = defineStore('getData', {

    state: () => {
        return {
            subscriptor: {} as GetSubscriptorDataInterface ,
            uuid: '' as string
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

        }
    }
})