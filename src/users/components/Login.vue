<template>
    <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card bg-dark text-white" style="border-radius: 1rem;">
                        <div class="card-body p-5 text-center">

                            <div class="mb-md-5 mt-md-4 pb-5">

                                <h2 class="fw-bold mb-2 text-uppercase">Ingresar</h2>
                                <form @submit.prevent="loginComponent.login">
                                    <div>
                                        <input type="email" id="typeEmailX" class="form-control form-control-lg"
                                            v-model="user.email" />
                                        <label class="form-label" for="typeEmailX">Email</label>
                                    </div>

                                    <div class="form-outline form-white mb-4">
                                        <input type="password" id="typePasswordX" class="form-control form-control-lg"
                                            v-model="user.password" />
                                        <label class="form-label" for="typePasswordX">Password</label>
                                    </div>
                                    <button class="btn btn-outline-light btn-lg px-5" type="submit">Ingresar</button>
                                </form>


                            </div>

                            <div>
                                <p class="mb-0">No tiene cuenta ? <a class="text-white-50 fw-bold"><router-link
                                            to="/signup">Registrarse</router-link></a>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup lang="ts">
import { reactive, } from 'vue';
import { LoginInterface } from '../interfaces/login.interface';
import { useLoginStore } from '../store/login.store'
const loginStore = useLoginStore();
import router from '../../router/index';
import Swal from 'sweetalert2';
const user = reactive<LoginInterface>({
    email: "",
    password: ""
})

class LoginComponent {

    async login() {
        if (user.email === "") {
            Swal.fire({
                title: '¡Atención!',
                text: 'Debe digitar el email !',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            });
            user.email = "";
            user.password = "";
            return
        }
        if (user.password === "") {
            Swal.fire({
                title: '¡Atención!',
                text: 'Ingrese la contraseña !',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            });
            user.email = "";
            user.password = "";
            return
        }
        try {
            const response = await loginStore.login(user);

            if (response.message === 'user not found') {
                Swal.fire({
                    title: '¡Atención!',
                    text: 'Usuario no encontrado !',
                    icon: 'warning',
                    confirmButtonText: 'Aceptar'
                });
                user.email = "";
                user.password = "";
                return
            }
            if (response.message === 'invalid password !') {
                Swal.fire({
                    title: '¡Atención!',
                    text: 'Contraseña Invalida !',
                    icon: 'warning',
                    confirmButtonText: 'Aceptar'
                });
                user.password = "";
                return
            }
            if (response.message === 'confirmed user !') {

                Swal.fire({
                    title: '¡Confirmación!',
                    text: 'Usuario Confirmado!',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                });
                user.email = "";
                user.password = "";
                setTimeout(() => {
                    router.push('/all-subscriptions');
                }, 2000)
            }

        } catch (error) {
            console.log("error desde componente", error)
        }
    }

}
const loginComponent = new LoginComponent();

</script>
<style scoped>
.gradient-custom {
    background: #6a11cb;
    background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));
    background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
}
</style>