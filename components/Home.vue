<template>
    <div class="home-container">
        <div class="home-content-container1" id="hero">
            <div class="home-content-header">Hi, my name is</div>
            <div class="home-content1">
                <h1 style="color:#ff8906">Aribisala Abiola</h1>
            </div>
            <div class="home-content2">I code 😉</div>
            <div class="home-content3">
                Prolific, Full Stack Web Developer with a passion for building 
                very efficient, problem solving systems. Passionate about 
                building world class web applications.
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
    @import '../assets/home.css';
</style>