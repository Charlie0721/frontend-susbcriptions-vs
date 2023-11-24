import axios from '../../services/axios/axios.connect';
/**
 * This class uses a getOne method to retrieve subscription data based on a provided uuid. It then utilizes the axios.get method to send an HTTP GET request to the specified endpoint, where the actual data retr
 */
export class GetDataSubscribe {
    async getOne(uuid: string) {
        return await axios.get(`/subscriptions/${uuid}`)
    }
} 