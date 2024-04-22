<template>
    <div class="mainbackground  d-flex  justify-content-center  align-items-center ">
        <div>
            <div>
                <div class="from-padding p-5">
                    <form @submit.prevent="submitForm">
                        <h3 class=" d-flex  text-primary fw-bold    justify-content-center ">Sign up</h3>
                        <p class=" text-primary text-center  ">Register New User</p>
                        <div class="mb-3">
                            <input type="text" class="form-control input-radius mb-3 " name="firstname"
                                :class="{ 'is-invalid': errors.firstname }" id="firstname"
                                aria-describedby="firstnameHelpId" placeholder="First Name" v-model="formData.firstname"
                                required>
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control input-radius mb-3 " name="lastname"
                                :class="{ 'is-invalid': errors.lastname }" id="lastname" aria-describedby="lastnameHelpId"
                                placeholder="Last Name" v-model="formData.lastname" required>
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control input-radius mb-3 " name="email"
                                :class="{ 'is-invalid': errors.email }" id="email" aria-describedby="emailHelpId"
                                placeholder="Enter User name or  Mail" v-model="formData.email" @input="validatemail"
                                required>
                        </div>
                        <div class="text-danger   errsize" v-if="errors.email">
                            {{ errors.email }}
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control input-radius mb-3 " name="password"
                                :class="{ 'is-invalid': errors.password }" id="password" placeholder="Password"
                                v-model="formData.password" required>

                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control input-radius mb-3 " name="conformpassword"
                                :class="{ 'is-invalid': errors.conformpassword }" id="conformpassword"
                                placeholder="conform Password" v-model="formData.conformpassword" required>
                        </div>
                        <button type="submit"
                            class=" btn btn-white login bg-primary mt-3   text-white  input-radius border-0 p-2">
                            <div v-if="loading" class=" spinner-border  spinner-border-sm ">
                            </div>
                            <span v-if="!loading"> Register
                            </span>
                        </button>
                    </form>
                    <div class=" d-flex w-100 mt-4   justify-content-center  ">
                        <p class=" text-primary text-center  ">Already have account ?</p> <router-link to="/LoginPage"
                            type="button" class="  ms-2  ">login</router-link>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
// import axios from 'axios';

export default {
    name: 'SignupPage',
    data() {
        return {
            formData: {
            },
            errors: {},
            loading: false,
        }
    },
    mounted() {
        let user = localStorage.getItem('user');
        if (user) {
            this.$router.push({ name: 'HomePage' })
        }
    },

    methods: {

        submitForm() {
            this.loading = !false
            setTimeout(() => {
                this.loading = !true
                console.log(this.formData);

                toast.success('User Registered')
            }, 200);



        },
        validatemail() {
            if (!this.formData.email) {
                this.errors.email = "Email requried"
                console.log('=========' + this.errors.email);
            } else if (!this.formData.email.includes("@gmail.com")) {
                this.errors.email = "Invalid email format"
            }
            else {
                delete this.errors.email;
            }
        }
        ,
        vaildatePassword() {
            if (!this.formData.password) {
                this.errors.password = "requried";

            } else if (this.formData.password.length < 5) {
                this.errors.password = "password Must Be 5 Charaters";
            }
            else {
                delete this.errors.password;
            }
        },

    }
}

</script>


<style  scoped>
.mainbackground {
    width: 100%;
    height: 100dvh !important;
    font-family: 'Poppins', sans-serif;
    background-color: white;
}

.errsize {
    font-size: 15px !important;
}

.vision-text {
    color: white;
}

.login {
    border: 1px solid rgb(55, 183, 239) !important;
    width: 100%;
}

.login:hover {
    border: 1px solid rgba(81, 188, 250, 0.4) !important;

}

.form-control::-webkit-input-placeholder {
    color: rgba(126, 126, 126, 0.8) !important;
    font-size: 12px !important;
    padding-left: 20PX;

}

.form-control {
    background: transparent;
    border: none;
    height: 50px;
    color: rgb(0, 0, 0) !important;
    border-bottom: 1px solid rgb(55, 183, 239);
    background: rgba(255, 255, 255, .08);
    border-radius: 0px;
    padding-left: 20px;
    padding-right: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;


}




.form-control:hover,
.form-control:focus {
    /* background: transparent !important; */
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-color: rgba(81, 188, 250, 0.4) !important;
}

.form-control:hover {
    background-color: rgb(243, 243, 243) !important;
}

.from-padding {
    border-radius: 20px;
    /* border: 1px solid black; */
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

}

.is-invalid {
    border: 1px solid red;

}

.is-invalid {
    animation: shake 400ms ease;
}

@keyframes shake {

    0%,
    100% {
        transform: translate(0);
    }

    25% {
        transform: translate(0.125rem);
    }

    75% {
        transform: translate(-0.125rem);
    }
}


/* .input-radius {
    border-radius: 20px;
} */
</style>
