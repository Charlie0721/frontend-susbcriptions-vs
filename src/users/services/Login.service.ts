import axios from '../../services/axios/axios.connect';
import { LoginInterface } from '../interfaces/login.interface';

/**
 * This LoginService class provides a login method that performs a login  request with the user's data. It utilizes the axios library to send
 */
export class LoginService {
    async login(login: LoginInterface) {
        return await axios.post(`/users/login`, login)
    }
}