<script>
    // @ts-nocheck

    import { Card, Listgroup, Avatar, Button } from "flowbite-svelte";

    let count = 2
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

    let meny = [
        {
            dish: "Kremet Spaghetti",
            subtitle: "med sjampinjong og soltørkede tomater",
            recipeUrl: "/plans/1/recipes/kremet-spaghetti",
        },
        {
            dish: "Kylling",
            subtitle: "med frisk salat og ovnsbakte poteter",
            recipeUrl: "/plans/1/recipes/kylling",
        },
        {
            dish: "Sjampinjong-Stroganoff",
            subtitle: "med soyasaus og fløte",
            recipeUrl: "/plans/1/recipes/sjampinjong-stroganoff",
        },
        {
            dish: "Toskansk Kylling",
            subtitle: "med spinat og soltørkede tomater",
            recipeUrl: "/plans/1/recipes/toskansk-kylling",
        },
    ];

    let ingredients = [
        {
            name: "Rødløk",
            amount: 0.5,
            measurement: "stk"
        },
        {
            name: "Agurk",
            amount: 0.5,
            measurement: "stk"
        },
        {
            name: "Poteter",
            amount: 3,
            measurement: "stk"
        },
        {
            name: "Spagetti",
            amount: 250,
            measurement: "g"
        },
        {
            name: "Matfløte",
            amount: 1.5,
            measurement: "dl"
        },
        {
            name: "Soltørkede Tomater",
            amount: 100,
            measurement: "g"
        },
        {
            name: "Sjampinjong",
            amount: 125,
            measurement: "g"
        },
        {
            name: "Kyllinglårfilet",
            amount: 150,
            measurement: "g"
        },

        {
            name: "Creme Fraiche",
            amount: 150,
            measurement: "g"
        },
        {
            name: "Cherry Tomater",
            amount: 150,
            measurement: "g"
        },
    ];

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

<div class="flex" />

<div class="grid mainContent gap-10 p-20">


         <Card class="h-max justify-self-end">
            <h5 class="text-md font-bold leading-none text-gray-900 dark:text-white pb-5">
                Middager 🍝
            </h5>


            <Listgroup
                items={meny}
                let:item
                class="border-0 dark:!bg-transparent">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <a href={item.recipeUrl}>
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">{item.dish}</p>
                        </a>
                       
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            {item.subtitle}
                        </p>
                    </div>
                </div>
            </Listgroup>
        </Card>

        <Card class="lastColumn h-max ">
            <h5 class="text-md font-bold leading-none text-gray-900 dark:text-white pb-5">
                Handleliste 🛒
            </h5>

            <div>
                <button class="border-2 rounded-full w-[1.8rem]" on:click={handleMinus}>-</button> 
                <span class="p-10"> {count} Personer </span> 
                <button class="border-2 rounded-full w-[1.9rem]" on:click={handlePlus}>+</button> 
            </div>

            

            <Listgroup items={ingredients} let:item class="border-0 dark:!bg-transparent">
                {item.name}
                <div class="inline-flex items-centertext-sm font-medium " >
                    {item.amount * count}{item.measurement}
                </div>
            </Listgroup>

            <br>

            <Button color="dark">{parseFloat((price * count).toFixed(2))} kr på Meny</Button>
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
</style>
