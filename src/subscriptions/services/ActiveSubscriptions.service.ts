import axios from '../../services/axios/axios.connect';

export class CheckActiveSubscriptionsService{
    async check(isActive:number){
        return await axios.get(`/subscriptions/active?isActive=${isActive}`)
    }
}