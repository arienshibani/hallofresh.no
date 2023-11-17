<script>
  import "../app.css";
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from "flowbite-svelte";
</script>

<Navbar let:hidden let:toggle style="background: rgb(255 255 255 / 70%); border-radius: 16px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); backdrop-filter: blur(13px);" class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b">

  <NavBrand href="/">
    <img
      src="https://www.seekpng.com/png/full/167-1677409_crme-frache-sour-cream-transparent-background.png"
      class="mr-3 h-6 sm:h-9"
      alt="a bowl of sour creme"
    />
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-black"
    >
      HALLO<br />FRESH!
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/plans">Ukemenyer</NavLi>
    <NavLi href="/info">Slik fungerer det</NavLi>
    <NavLi href="/recipes">Oppskrifter</NavLi>
    <NavLi href="https://github.com/arienshibani/hallofresh.no"><img src="gitlogo.png" class="max-h-5 pl-10" alt="github logo"></NavLi>
  </NavUl>
</Navbar>
<br>
<br>
<br>

<slot />
