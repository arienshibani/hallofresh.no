<script>
    import img from "$lib/assets/peep-wut.png";
    import { List, Li } from "flowbite-svelte";
</script>

<h1 class="text-3xl text-center p-20 font-bold">
    Beklager, denne siden finnes ikke..
</h1>

<img src={img} alt="A confused peep" class="w-1/4 mx-auto" />

<div class="align-middle text-center w-80 m-auto">
    <List list="disc" class="text-left">
        <Li>
            Gå tilbake til <a href="/" class="link text-cyan-500">hovedsiden?</a>
        </Li>
        <Li>
            eller <a href="https://github.com/arienshibani/hallofresh.no/discussions" class="link text-cyan-500">kontakt oss</a>
        </Li>
    </List>
</div>
