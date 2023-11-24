import axios from '../../services/axios/axios.connect';
import {UpdateSubscriptionInterface} from '../interfaces/UpdateSubscription.interface'

export class UpdateSubscriptionService{
    async update(uuid: string, updateSubscription:UpdateSubscriptionInterface ){
        return axios.put(`/subscriptions/${uuid}`, updateSubscription)
    }
}


