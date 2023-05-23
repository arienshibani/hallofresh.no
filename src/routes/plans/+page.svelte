<script>
    // @ts-nocheck

    import { Card, Listgroup, Avatar } from "flowbite-svelte";

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
            amount: "1 stk",
        },
        {
            name: "Agurk",
            amount: "1stk",
        },
        {
            name: "Poteter",
            amount: "6 stk",
        },
        {
            name: "Spagetti",
            amount: "500g",
        },
        {
            name: "Matfløte",
            amount: "3dl",
        },
        {
            name: "Soltørkede Tomater",
            amount: "190g",
        },
        {
            name: "Sjampinjong",
            amount: "250g",
        },
        {
            name: "Kyllinglårfilet",
            amount: "300g",
        },

        {
            name: "Creme Fraiche",
            amount: "300g",
        },
        {
            name: "Cherry Tomater",
            amount: "300g",
        },
    ];
</script>

<div class="flex" />

<div class="grid grid-cols-2 justify-items-center">

        <Card padding="xl" size="sm">
            <div class="flex justify-between items-center mb-4">
                <h5
                    class="text-xl font-bold leading-none text-gray-900 dark:text-white"
                >
                    Retter
                </h5>
            </div>
            <Listgroup
                items={meny}
                let:item
                class="border-0 dark:!bg-transparent"
            >
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

            <Card padding="xl" size="md">
            <h5 class="text-md font-bold leading-none text-gray-900 dark:text-white">
                Ingredienser
            </h5>
            <br />
            <Listgroup items={ingredients} let:item class="border-0 dark:!bg-transparent">
                {item.name}
                <div class="inline-flex items-centertext-sm font-medium text-blue-600 hover:underline dark:text-blue-500" >
                    {item.amount}
                </div>
            </Listgroup>
        </Card>
</div>
