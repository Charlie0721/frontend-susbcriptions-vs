import { defineStore } from 'pinia';
import { LoginInterface } from '../interfaces/login.interface';
import { LoginService } from '../services/Login.service'

const loginService = new LoginService();

export const useLoginStore = defineStore('loginStore', {

    state: () => {

        return {
            user: {} as LoginInterface,
            errorData: [] as any
        }
    },
    actions: {

        async login(loginUser: LoginInterface) {
            try {
                this.user = loginUser;
                const responseLogin = await loginService.login(this.user)
                return responseLogin.data

            } catch (error: any) {
                this.errorData = error.response.data.message;
            }
        }

    }

})