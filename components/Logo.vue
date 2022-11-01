<template>
    <div class="logo-container">
        <NuxtLink to="/">
            <span class="logo">Bl4z3</span>
        </NuxtLink>
        <div class="logo-menu">
            <span @click="smoothScroll('#home')">Home</span>
            <span @click="smoothScroll('#experience')">Experience</span>
            <span @click="smoothScroll('#contact')">Contact</span>
        </div>
       
        <div class="mobile-topbar">
            <div class="ham-box">
                <span class="ham-box-inner"></span>
                <span class="ham-box-inner"></span>
                <span class="ham-box-inner"></span>
            </div>
            
        </div>

    </div>
</template>

<script>
export default {
    methods: {
        smoothScroll(id){
            console.log("here");
            document.querySelector(id)?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
}
</script>

<style>
    @import '../assets/logo.css';
</style>