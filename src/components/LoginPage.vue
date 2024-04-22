<template>
    <div class="mainbackground  d-flex  justify-content-center  align-items-center ">
        <div>
            <div>

                <div class="from-padding p-5">
                    <form @submit.prevent="submitForm">
                        <h3 class=" d-flex  text-primary fw-bold    justify-content-center ">Login</h3>
                        <p class=" text-primary text-center  ">Please enter the valid credentials to login.</p>
                        <div class="mb-3">
                            <input type="email" class="form-control input-radius mb-3 " name="Email"
                                :class="{ 'is-invalid': errors.email }" id="Email" aria-describedby="emailHelpId"
                                placeholder="Username" v-model="formData.email" @input="validatemail">
                        </div>
                        <div class="text-danger   errsize" v-if="errors.email">
                            {{ errors.email }}
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control input-radius mb-3 " name="password"
                                :class="{ 'is-invalid': errors.password }" id="password" placeholder="Password"
                                v-model="formData.password" @input="vaildatePassword" required>
                        </div>
                        <div class="text-danger mb-3  errsize " v-if="errors.password">
                            {{ errors.password }}
                        </div>
                        <button type="submit"
                            class=" btn btn-white login bg-primary   text-white  mt-3   input-radius border-0 p-2"
                            :disabled="!formData.email || !formData.password">
                            <div v-if="loading" class=" spinner-border  spinner-border-sm ">
                            </div>
                            <span v-if="!loading"> LOGIN
                            </span>
                        </button>
                        <a href="" class=" text-primary text-decoration-none d-flex justify-content-end mt-3">Forget
                            Password?</a>
                    </form>
                    <div class=" d-flex w-100 mt-4   justify-content-center  ">
                        <p class=" text-primary text-center  ">Don't have account ?</p> <router-link to="/SignupPage"
                            type="button" class="  ms-2  ">Register</router-link>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import axios from 'axios';


export default {
    name: 'LoginPage',
    data() {
        return {
            formData: {},
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
            this.loading = true;  // Update to set loading to true
            const data = {
                usr: this.formData.email,
                pwd: this.formData.password,
            };
            axios.post('http://dev.caratred.in/api/method/login', { ...data })
                .then((response) => {
                    console.log(response);
                    toast.success("Login Successfull"), {
                        position: "top-right",
                    };
                    if (response.status == 200) {
                        this.loading = false;
                        localStorage.setItem("user", JSON.stringify(data))
                        setTimeout(() => {
                            this.$router.push({ name: 'HomePage' })
                        }, 1000)

                    }
                })
                .catch((error) => {
                    this.loading = false;  // Set loading to false on error
                    toast.error("Invalid Credentials");
                    console.error(error);
                });
        },
        validatemail() {
            if (!this.formData.email) {
                this.errors.email = "Email or User Name requried"
                console.log('=========' + this.errors.email);
            }
            //  else if (!this.formData.email.includes("@gmail.com")) {
            //     this.errors.email = "Invalid email format"
            // }
            else {
                delete this.errors.email;
            }
        },
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
    background: transparent !important;
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