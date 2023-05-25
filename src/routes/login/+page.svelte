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
        Label, Input, Button
    } from "flowbite-svelte";

</script>


<h1 class="text-5xl text-center pt-16 pb-5">Logg Inn</h1>
<div class="flex-col max-w-md m-auto">
    <Input id="disabled-input" class="mb-10 mt-10"  placeholder="Username" />
    <Input id="disabled-input-2" class="mb-10 mt-10"   value="" placeholder="Password"/>

</div>

<div class="flex justify-center">
    <Button class="bg-slate-900">Login</Button>
</div>

<style>
@media (max-width: 650px) {
}
</style>
