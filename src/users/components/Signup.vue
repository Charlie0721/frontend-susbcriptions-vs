<template>
    <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card bg-dark text-white" style="border-radius: 1rem;">
                        <div class="card-body p-5 text-center">

                            <div class="mb-md-5 mt-md-4 pb-5">

                                <h2 class="fw-bold mb-2 text-uppercase">Registrarse</h2>
                                <form @submit.prevent="signupComponent.signupComponentMethod">


                                    <div class="form-outline form-white mb-4">
                                        <input type="text" id="typeEmailX" class="form-control form-control-lg"
                                            v-model="userData.name" />
                                        <label class="form-label" for="typeEmailX">Nombres</label>
                                    </div>
                                    <div class="form-outline form-white mb-4">
                                        <input type="email" id="typeEmailX" class="form-control form-control-lg"
                                            v-model="userData.email" />
                                        <label class="form-label" for="typeEmailX">Email</label>
                                    </div>

                                    <div class="form-outline form-white mb-4">
                                        <input type="password" id="typePasswordX" class="form-control form-control-lg"
                                            v-model="userData.password" />
                                        <label class="form-label" for="typePasswordX">Password</label>
                                    </div>


                                    <button class="btn btn-outline-light btn-lg px-5" type="submit">Registrarse</button>
                                </form>


                            </div>

                            <div>
                                <p class="mb-0"> <a class="text-white-50 fw-bold"><router-link to="/">Ir al inicio de
                                            Sesión</router-link></a>
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
import { reactive } from "vue"
import Swal from 'sweetalert2';
import { useSignupUserStore } from '../store/signup.store'
import { SignupInterface } from '../interfaces/signup.interface';
import router from '../../router/index';
const signupStore = useSignupUserStore()
const userData = reactive<SignupInterface>({
    name: "",
    email: "",
    password: ""
})

class SignupComponent {


    async signupComponentMethod() {
        if (userData.name === "") {
            Swal.fire({
                title: '¡Atención!',
                text: 'Debe digitar el usuario !',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            });
            userData.name = "";
            userData.email = "";
            userData.password = "";
            return
        }
        if (userData.email === "") {
            Swal.fire({
                title: '¡Atención!',
                text: 'Debe digitar email !',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            });
            userData.name = "";
            userData.email = "";
            userData.password = "";
            return
        }
        if (userData.password === "") {
            Swal.fire({
                title: '¡Atención!',
                text: 'Debe ingresar Contraseña !',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            });

            userData.name = "";
            userData.email = "";
            userData.password = "";
            return
        }

        const response = await signupStore.signup(userData)
        Swal.fire({
            title: '¡CONFIRMADO!',
            text: `usuario ${response.email} creado satisfactoriamente !`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
        router.push(`/`)
        return response
    }


}
const signupComponent = new SignupComponent()

</script>

<style scoped>
.gradient-custom {
    background: #6a11cb;
    background: -webkit-linear-gradient(to right, rgba(130, 35, 13, 1));
    background: linear-gradient(to right, rgba(130, 35, 13,1), rgba(130, 35, 13, 1))
}
</style>