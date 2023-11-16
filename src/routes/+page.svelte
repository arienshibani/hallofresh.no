<script>
    import {
        ArrowRight
    } from 'svelte-heros-v2';
  </script>

<section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">GO'MIDDAG!</h1>
        <p class="mb-8 text-lg font-normal text-gray-800 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Bestill ukemenyen direkte fra butikken, ingen mellomledd </p>


        <div>
            <img class="flex m-auto max-w-xs" src="https://www.seekpng.com/png/full/167-1677409_crme-frache-sour-cream-transparent-background.png" alt="">
        </div>
        <a href="/info">
        <div class="flex"> 
            
            <button class="m-auto border border-black border-r-4 border-b-4  rounded-sm h-10 w-fit pr-4 pl-4 mt-20 mb-40" >
                Slik fungerer det  <ArrowRight class="inline"/>
            </button>
        
            
        </div>
    </a>   
    </div>
</section>

<style>
      button:hover{
    color: white;
    background-color: black;
    border-color: white;
  }

</style>
