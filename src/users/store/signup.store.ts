import { defineStore } from 'pinia';
import { SignupInterface } from '../interfaces/signup.interface';
import { SignupService } from '../services/Signup.service';

const signupService = new SignupService();

export const useSignupUserStore = defineStore('useSignupStore', {

    state: () => {
        return {
            user: {} as SignupInterface,
            response: [] as any
        }
    },
    actions: {

        async signup(signupUser: SignupInterface) {

            try {
                this.user = signupUser
                const responseUser = await signupService.signup(this.user)
                return this.response = responseUser.data
            } catch (error) {
                console.log(error)
            }

        }

    }

}
)
