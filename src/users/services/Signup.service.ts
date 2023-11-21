import axios from '../../services/axios/axios.connect';
import { SignupInterface } from '../interfaces/signup.interface'

export class SignupService {
   async signup(signupInterface: SignupInterface) {
        return await axios.post(`/users`, signupInterface)
    }
}
