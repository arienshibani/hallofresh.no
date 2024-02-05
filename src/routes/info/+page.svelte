<script>
// @ts-nocheck

  import {
      ArrowRight,
  } from 'svelte-heros-v2';

  import { ImagePlaceholder } from 'flowbite-svelte';
</script>

<h1 class="text-5xl text-center pt-16">Sånn funker det 💡</h1>

<h1 class="text-3xl text-center p-2 pt-20">1. Velg middagsplan 🍽</h1>
<div class="gridsetup grid p-12 grid-cols-2 gap-4 items-center max-w-4xl mt-0 m-auto">
  <img class="max-w-4 max-h-[300px] rounded-sm" src="https://images.squarespace-cdn.com/content/53b839afe4b07ea978436183/1608506201082-GU22QYZJC5TWXRSY24RX/traditional-food-around-the-world-Travlinmad.jpg?content-type=image%2Fjpeg" alt="food that contains creme fraiche">
    <p class="pl-8 relative text-xl">
      Velg en ukemeny som passer deg og antallet personer du vil lage mat til, og Hallo Fresh genererer handlelisten for deg automatisk.
    </p>

</div>

<h1 class="text-3xl text-center p-2 pt-10">2. Bestill råvarene 📦</h1>

<div class="gridsetup grid p-12 grid-cols-2 gap-4 items-center max-w-4xl mt-0 m-auto">

  <!-- This tag gets hidden on mobile phones in order to not mess up the grid layout -->
  <p class="pr-8 relative text-xl hideOnSmallScreens">
    Handle inn på egenhånd, eller få det på døren. Hva enn du velger, så er det billigere en hvilken som helst matkasse! 
  </p>

    <template>
      <ImagePlaceholder imgHeight={60} class="mt-8" />
    </template>
    <img class="max-w-4 max-h-[300px] rounded-sm" src="https://thehappyfoodie.co.uk/wp-content/uploads/2021/08/pasta_8_215_img_s900x0_c1931x1128_l0x643.jpg" alt="food that contains creme fraiche">

    <!-- This tag gets displayed on mobile phones in order to not mess up the grid layout -->
    <p class="relative text-xl hideOnLargeScreens">
      Bestill alt du trenger direkte fra dagligvare butikken din på 1-2-3! Eller kjøp alt selv, så sparer du enda mer.
    </p>
</div>

<!-- Button: Links to /plans -->
<a href="/plans">   
  <div class="flex">  
      <button class="m-auto border border-black border-r-4 border-b-4  rounded-sm h-10 w-fit pr-4 pl-4 mt-20 mb-40" >
        Finn din ukemeny!  <ArrowRight class="inline"/>
      </button>
  </div>
</a>   

<style>
  button:hover{
    color: white;
    background-color: black;
    border-color: white;
  }



  .hideOnLargeScreens{
    display: none;
  }

@media (max-width: 650px) {
  .hideOnLargeScreens{
    display: inherit
  }

  .hideOnSmallScreens{
    display: none;
  }


  .gridsetup {
    display: block;
    font-size: 80%;
  }
  
  p {
    position: relative;
    margin: -3rem 0 2rem 1rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 255);
    opacity: 0.8;
  }

}

</style>
