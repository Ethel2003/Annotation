<script setup>

</script>

<template>
    <div class="wrapper relative w-full h-full bg-gradient-to-b from-[#04a2fd] via-[#2563EB] to-[#030423] rounded-r-lg">
        <h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl text-center font-extrabold uppercase tracking-wide">
            Tracking Annotation
        </h1>

        <!-- 15 animated circles -->
        <div class="bubble top-[20%] left-[20%] animate-bubble1"><span class="dot"></span></div>
        <div class="bubble top-[60%] left-[80%] animate-bubble2"><span class="dot"></span></div>
        <div class="bubble top-[40%] left-[40%] animate-bubble3"><span class="dot"></span></div>
        <div class="bubble top-[66%] left-[30%] animate-bubble4"><span class="dot"></span></div>
        <div class="bubble top-[90%] left-[10%] animate-bubble5"><span class="dot"></span></div>
        <div class="bubble top-[30%] left-[60%] animate-bubble6"><span class="dot"></span></div>
        <div class="bubble top-[70%] left-[20%] animate-bubble7"><span class="dot"></span></div>
        <div class="bubble top-[75%] left-[60%] animate-bubble8"><span class="dot"></span></div>
        <div class="bubble top-[50%] left-[50%] animate-bubble9"><span class="dot"></span></div>
        <div class="bubble top-[45%] left-[20%] animate-bubble10"><span class="dot"></span></div>
        <div class="bubble top-[10%] left-[90%] animate-bubble11"><span class="dot"></span></div>
        <div class="bubble top-[20%] left-[70%] animate-bubble12"><span class="dot"></span></div>
        <div class="bubble top-[20%] left-[20%] animate-bubble13"><span class="dot"></span></div>
        <div class="bubble top-[60%] left-[5%]  animate-bubble14"><span class="dot"></span></div>
        <div class="bubble top-[90%] left-[80%] animate-bubble15"><span class="dot"></span></div>
    </div>
</template>

<style scoped>
.wrapper {

  .animate-bubble1 {
    animation: animate 8s linear infinite;
  }
  .animate-bubble2 {
    animation: animate 10s linear infinite;
  }
  .animate-bubble3 {
    animation: animate 3s linear infinite;
  }
  .animate-bubble4 {
    animation: animate 7s linear infinite;
  }
  .animate-bubble5 {
    animation: animate 9s linear infinite;
  }
  .animate-bubble6 {
    animation: animate 5s linear infinite;
  }
  .animate-bubble7 {
    animation: animate 8s linear infinite;
  }
  .animate-bubble8 {
    animation: animate 10s linear infinite;
  }
  .animate-bubble9 {
    animation: animate 6s linear infinite;
  }
  .animate-bubble10 {
    animation: animate 10s linear infinite;
  }
  .animate-bubble11 {
    animation: animate 9s linear infinite;
  }
  .animate-bubble12 {
    animation: animate 7s linear infinite;
  }
  .animate-bubble13 {
    animation: animate 8s linear infinite;
  }
  .animate-bubble14 {
    animation: animate 6s linear infinite;
  }
  .animate-bubble15 {
    animation: animate 9s linear infinite;
  }
}

@media  only screen and (max-width: 768px) {
    h1{
        top:100px;
        
    }
}
</style>