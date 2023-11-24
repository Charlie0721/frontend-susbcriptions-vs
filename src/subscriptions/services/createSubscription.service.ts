import axios from '../../services/axios/axios.connect';
import { CreateSubscriptionInterface } from '../interfaces/CreateSubscription.interface';

export class CreateSuscriptionService {

    async create(creteSubscription: CreateSubscriptionInterface) {
        return await axios.post(`/subscriptions`, creteSubscription)
    }

}