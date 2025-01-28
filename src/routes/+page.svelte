<script>
    import { ArrowRight } from "svelte-heros-v2";
    import { Card } from "flowbite-svelte";

    // Retreived from +server.js load function
    export let data;
    $: ({ recipes } = data);

    let onPhone;
    let mediaQ = "xl";
    if (typeof window !== "undefined") {
        onPhone = window.matchMedia("(min-width: 600px)");
        mediaQ = onPhone.matches ? "xl" : "xs";
    }

    const message = "%c https://github.com/arienshibani %c";
    const style1 = "background: linear-gradient(to right, red, orange);";
    const style2 = "color: white; font-weight: bold;";

    const recipeCount = data.recipes.length;
    const mealPlanCount = data.mealplans.length;
</script>

<section class="bg-white dark:bg-gray-900 mb-96 mt-28">
    <div class="flex flex-col items-center justify-center w-full p-4">
        <div class="text-4xl md:text-6xl font-bold text-black text-center">
            Hva <span class="text-orange-400">faen</span> skal du
        </div>

        <div class="text-4xl md:text-6xl font-bold relative text-center">
            <span
                class="bg-orange-300 absolute -bottom-1 h-[35%] w-[101%] mr-[1px]"
            ></span>
            <span class="text-black relative"> ha til middag idag?</span>
        </div>
    </div>

    <div class="pt-111 pb-6 pt-12">
        <div class="flex items-start justify-center">
            <div
                class="h-[200px] w-[400px] bg-white rounded-l-xl flex flex-col items-start p-5"
            >
                <div class="space-y-4">
                    <div class="flex items-start space-x-3">
                        <svg
                            class="w-5 h-5 text-black mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path></svg
                        >
                        <span class="text-black">
                            {mealPlanCount} Ukemenyer og {recipeCount} oppskrifter</span
                        >
                    </div>
                    <div class="flex items-start space-x-3">
                        <svg
                            class="w-5 h-5 text-black mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path></svg
                        >
                        <span class="text-black"
                            >Velg selv hvor og når du handler inn</span
                        >
                    </div>
                    <div class="flex items-start space-x-3">
                        <svg
                            class="w-5 h-5 text-black mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            ><path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            ></path></svg
                        >
                        <span class="text-black"
                            >Spar penger, ingen måndlige avgifter
                        </span>
                    </div>
                    <div>
                        <a href="/info">
                            <div class="flex pt-5">
                                <button
                                    class="mx-auto border border-black border-r-4 border-b-4 rounded-sm h-10 w-fit pr-4 pl-4 hover:scale-110 transition-transform duration-300 mt-2"
                                >
                                    Hvordan funker det? <ArrowRight
                                        class="inline"
                                    />
                                </button>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div
        class="col-span-2 flex flex-col justify-endrounded-lg p-4 h-[300px] overflow-hidden relative group"
    >
        <div
            class="absolute -top-12 left-1/2 -translate-x-1/2 w-60 h-16 z-0 blur-[90px] opacity-0 group-hover:opacity-100 transition duration-700"
        ></div>
        <div
            class="flex-grow relative h-full flex justify-center items-center space-x-12"
        >
            <div class="absolute -left-4 h-full w-16 to-transparent z-10"></div>
            <div class="absolute -right-4 h-full w-16 z-10"></div>
            <div class="flex justify-end space-x-12 animate-carousel">
                <!-- Randomized recipe cards in carousel -->
                {#each recipes.sort(() => Math.random() - 0.5) as recipe}
                    <a href="/recipes/{recipe.title}">
                        <Card
                            class="shrink-0 w-64 h-32 border-none shadow-none"
                        >
                            <h3 class="text-lg font-bold">{recipe.title}</h3>
                            <p class="text-sm">{recipe.subtitle}</p>
                        </Card>
                    </a>
                {/each}
            </div>
            <style>
                @keyframes carousel {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(
                            calc(-112px * 4)
                        ); /* Move exactly one set (4 items) */
                    }
                }

                .animate-carousel {
                    animation: carousel 30s linear infinite;
                }

                .hover .animate-carousel {
                    animation-play-state: paused;
                }
            </style>
        </div>
    </div>

    <div
        class="absolute -top-12 left-1/2 -translate-x-1/2 w-60 h-16 bg-blue-600 z-0 blur-[90px] opacity-0 group-hover:opacity-100 transition duration-700"
    ></div>
</section>

<style>
    button:hover {
        color: white;
        background-color: black;
        border-color: white;
    }
</style>
