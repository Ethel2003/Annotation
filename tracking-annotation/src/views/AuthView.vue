<script setup>

import Animation from '@/components/Animation.vue';

</script>

<template>
    <div class="h-screen flex justify-center items-center">
        <div class="container w-5xl  flex justify-center items-center shadow-xl rounded-l-lg bg-white ">
            <section class=" form w-5xl h-96 p-9">
                <h1 class="text-center mb-6 font-bold text-3xl">Sign In</h1>
                <form action="" class=" h-4/5 flex flex-col justify-center items-center">
                    <div class="user flex flex-col mb-4 w-full">
                        <label class="m-1.5 font-semibold" for="username">Username</label>
                        <input class="border focus:outline-none p-2 rounded-sm border-[#CBD5E1] bg-slate-200" type="text" id="username" name="username" placeholder="Enter your username" required>
                    </div>
                    <div class="password flex flex-col mb-4 w-full">
                        <label class="m-1.5 font-semibold" for="password">Password</label>
                        <input class="border focus:outline-none p-2 rounded-sm border-[#CBD5E1] bg-slate-200" type="password" id="password" name="password" placeholder="Enter your password" required>
                    </div>
                    <button class="bg-[#2563EB] hover:bg-blue-700 text-white p-3 w-32 rounded-sm mt-5">Sign in </button>
                </form>
            </section>
            <section class=" animate w-5xl h-96 bg-[#2563EB] text-white rounded-r-lg">
                <Animation />

            </section>
        
        </div>
    </div>
</template>

<style scoped>
@media  only screen and (max-width: 768px) {
    .container{
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        border: 1px solid red;
        /* width:90svw; */
    }
    section{
        width:100vw;
    }

    .form{
        position: absolute;
        bottom: 9.5em;
        z-index: 10;
        color: #1E293B;
        backdrop-filter: blur(5px);
        background-color: rgba(255, 255, 255, 0.5);
        margin: auto 20px;
        width: 90vw;
        border-radius: 10px;
    }
    .animate{
        height: 100vh;
    }
    ::placeholder{
        color:#334155 ;
    }
}

</style>