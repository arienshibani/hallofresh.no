<script>
    // @ts-nocheck
    import {
        ArrowRight,
        ArrowLeftCircle,
        ArrowRightCircle,
        PlusCircle,
        MinusCircle,
    } from 'svelte-heros-v2';


    import { 
        Card, 
        Listgroup, 
        Checkbox 
    } from "flowbite-svelte";

    // Retrieve the recipes from the data.
    $: ({ mealplans } = data);
    export let data;
    console.log(data)

    let count = 2
    let currentPlan = 1
    let price = 136.42

    function handlePlus() {
		count += 1;
        if(count >= 10){
            // Do not allow the counter to go above 10
            count = 10
        }
	}

    function handleMinus() {
		count -= 1;
        // Do not allow the counter to go below 1
        if(count <= 1){
            count = 1
        }
	}


    const handleMeasurementConversion = (amount, measurement) => {
        let convertedMeasurement = {amount: amount, measurement: measurement}

        if(measurement === "g"){
            if(amount >= 1000){
                convertedMeasurement.measurement = "kg"
                convertedMeasurement.amount = amount / 1000
            }
            return convertedMeasurement
        }

        if(measurement === "kg"){
            if(amount < 1){
                convertedMeasurement.measurement = "g"
                convertedMeasurement.amount = amount * 1000
            }
        }

        return `${amount} ${measurement}`
    } 


</script>


<h1 class="text-5xl text-center pt-16 pb-5">{mealplans[0].name}</h1>

<div class="flex justify-center">
    <h2 class="text-xl text-left p-5 max-w-md"> Benytt deg av pilene og + / - knappene under for å velge mellom menyer og antall personer for å justere handlelisten. </h2>
</div>


<div class="grid mainContent gap-x-60 p-10">
         <Card class="h-max justify-self-end border-none shadow-none">
            <div class="flex justify-evenly">
                <button class="items-center self-center  rounded-sm h-10 w-fit pr-2 pl-2" >
                     <ArrowLeftCircle class="inline"/>
                </button>
                <h2 class="text-2xl text-center text-gray-900">Italiensk Uke</h2>
                <button class="items-center self-center  rounded-sm h-10 w-fit pr-2 pl-2" >
                    <ArrowRightCircle class="inline"/>
                </button>
            </div>
          
            <Listgroup
                items={mealplans[0].dishes}
                let:item
                class="border-0 dark:!bg-transparent pt-5">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <a href="recipes/{item.dish}">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">{item.dish}</p>
                        </a>
                       
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            {item.subtitle}
                        </p>
                    </div>
                </div>
            </Listgroup>


            <p class="text-center text-gray-900 mt-8">Antall Personer</p>

            <div class="flex justify-evenly">
                <button on:click={handleMinus}>  
                    <MinusCircle/>
                </button> 
                <span class=""> {count} {count === 1 ? "Person" : "Personer"} </span> 
                <button on:click={handlePlus}>
                    <PlusCircle/>
                </button> 
            </div>

            <h1 class="text-xl text-center pt-16 text-gray-950">Prisoverslag</h1>


            <div class="flex justify-center">
                <h2 class="text-xs text-left pt-5 pb-5 max-w-content"> Trykk på prisoverslaget for å gå videre til leverandøren. Handlelisten din vil være ferdig utfyllt med alle varene for 2 personer. Prisoverslaget kan fravike ifra virkeligheten.</h2>
            

            </div>

            <a class="items-center self-center" target="_blank" href="{mealplans[0].menyUrl}">
                <button class="items-center self-center border border-black border-r-4 border-b-4  rounded-sm h-10 w-fit pr-4 pl-4 m-5" >
                    {parseFloat((price * count).toFixed(2))} kr hos Meny
                </button>
            </a>

        </Card>

        <Card class="lastColumn h-max shadow-none rounded-sm">
            <h5 class="text-md font-bold text-center leading-none text-gray-900 dark:text-white pb-5">
                Handleliste 🛒
            </h5>            
            <Listgroup items={mealplans[0].ingredients} let:item class="border-0 dark:!bg-transparent">
                {item.name} 
                <div class="">
                    <Checkbox class="m-2 checked:bg-slate-900 outline-black"/> {item.amount * count}{item.measurement} 
                </div>
            </Listgroup>
            <br>    
        </Card>

</div>


<style>
    .lastColumn{
        grid-column-end: none;
    }

    .mainContent{
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 650px) {
    .mainContent{
        justify-content: center;
        grid-template-columns: none;
    }

}

  button:hover{
    color: white;
    background-color: black;
    border-color: white;
  }
</style>
