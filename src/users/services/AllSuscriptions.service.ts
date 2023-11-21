import axios from '../../services/axios/axios.connect';
export class AllSubscriptionsService {
    async getAll() {
        return await axios.get(`/subscriptions`)
    }
}