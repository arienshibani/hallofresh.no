<script>
    // @ts-nocheck
    import { PlusCircle, MinusCircle, ArrowLeftCircle, ArrowRightCircle } from "svelte-heros-v2";

    function handlePlus() {
        count += 1;
        if (count >= 10) {
            // Do not allow the counter to go above 10
            count = 10;
        }
    }

    function handleMinus() {
        count -= 1;
        // Do not allow the counter to go below 1
        if (count <= 1) {
            count = 1;
        }
    }

    let count = 1;

    // Retrieve the recipes from the data.
    $: ({ recipe } = data);
    export let data;

</script>



<div class="flex justify-center pt-10 ">
    <button class="items-center self-center  rounded-sm h-10 w-fit pr-8" >
         <ArrowLeftCircle class="inline"/>
    </button>
    <h1 class="text-5xl text-center pb-5">{recipe.dish}</h1>
    <button class="items-center self-center  rounded-sm h-10 w-fit pl-8" >
        <ArrowRightCircle class="inline"/>
    </button>
</div>

<h1 class="text-3xl text-center pb-5 hideOnSmallScreens centerTextOnSmallScreen">{recipe.subtitle}</h1>

<div class="flex justify-center flex-wrap pt-10 pb-40">
    <div class="">
        <h1 class="text-2xl font-bold">Ingredienser</h1>
        <div class="flex justify-start pt-5">
            <button on:click={handleMinus} class="pr-5">
                <MinusCircle class="inline" />
            </button>
            <h2 class="text-1xl text-gray-900">
                {count} {count === 1 ? "Person  " : "Personer"}
            </h2>
            <button on:click={handlePlus} class="pl-5">
                <PlusCircle class="inline" />
            </button>
        </div>
       
        {#each recipe.dishIngredients as ingredient}
            <p class="pt-6 text-lg bigPaddingOnLargeScreens">
                {ingredient.amount * count}{ingredient.measurement}
                <span class="pl-4 text-left">{ingredient.name}</span>
            </p>
        {/each}
        
    </div>

    <div class="flex-grow-1">
        <h1 class="text-2xl font-bold pb-5 topPaddingOnSmallScreens" >Slik gjør du</h1>
        {#each recipe.steps as step, index}
            <p class="text-xl p-4 max-w-lg">
                <span class="font-bold">{index + 1 + "."}</span>
                {step}
            </p>
        {/each}
    </div>
</div>




<style>
.bigPaddingOnLargeScreens{
    padding-right: 10rem;
}

@media (max-width: 881px) {
  .hideOnLargeScreens{
    display: inherit
  }

  .hideOnSmallScreens{
    display: none;
  }

  .bigPaddingOnLargeScreens{
    padding-right: 0rem;
}

  .topPaddingOnSmallScreens{

    padding: 2rem;
    padding-top: 4rem;
  }

}

</style>
