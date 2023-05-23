<script>
    import "../app.css";
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
</script>
  
<Navbar let:hidden let:toggle class="">
    <NavBrand href="/">
      <img
        src="https://www.seekpng.com/png/full/167-1677409_crme-frache-sour-cream-transparent-background.png"
        class="mr-3 h-6 sm:h-9"
        alt="Drawn by jcomp on Freepik.com"
      />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Hello Fraiche
      </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi href="/plans">Ukemenyer</NavLi>
      <NavLi href="/info">Slik fungerer det</NavLi>
      <NavLi href="/plans/recipes">Oppskrifter</NavLi>
      <NavLi href="/recipes">Butikker</NavLi>
    </NavUl>
  </Navbar>

  <slot />
