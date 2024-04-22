<template>
    <!-- <div class="ms-5">homepage</div> -->
    <div>
        <button class="btn btn-secondary " @click="logout">Logout</button>
    </div>
</template>
<script>
export default {
    name: 'HomePage',
    data() {
        return {

        }
    },
    methods: {
        logout() {
            localStorage.clear()
            this.$router.push({ name: 'LoginPage' })
        }
    },
    mounted() {
        let user = localStorage.getItem('user');
        if (!user) {
            this.$router.push({ name: 'LoginPage' })
        }
    }
}
</script>
<style scoped>
div {
    height: 100dvh;
    /* width: 100%; */

}
</style>