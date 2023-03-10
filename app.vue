<script setup>
import "@/assets/styles/globals.scss";

const route = useRoute();

const pageKey = {
  "/": "index",
  "/sobre": "sobre",
  "/contato": "contato",
  "/projetos": "projetos",
};

const page = computed(() => {
  return pageKey[route.fullPath];
});
</script>

<template>
  <Head>
    <Link rel="preconnect" href="https://fonts.googleapis.com" />
    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <Link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap"
      rel="stylesheet"
    />
    <Link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
      rel="stylesheet"
    />
  </Head>
  <header>
    <h1>
      <NuxtLink to="/" class="text-blue">Luminares Arq</NuxtLink>
    </h1>
  </header>
  <div class="grid" :data-page="page">
    <div class="card" id="sobre" :data-page="page">
      <Transition name="fade">
        <NuxtLink class="grid-link" to="/sobre" v-show="page == 'index'"
          >Sobre nós</NuxtLink
        >
      </Transition>
    </div>
    <div class="card" id="projetos" :data-page="page">
      <Transition name="fade">
        <NuxtLink class="grid-link" to="/projetos" v-show="page == 'index'"
          >Projetos</NuxtLink
        >
      </Transition>
    </div>
    <div class="card" id="contato" :data-page="page">
      <Transition name="fade">
        <NuxtLink class="grid-link" to="/contato" v-show="page == 'index'"
          >Contato</NuxtLink
        >
      </Transition>
    </div>
  </div>
  <NuxtPage />
  <footer></footer>
</template>

<style lang="scss">
header {
  position: relative;
  display: flex;
  align-items: center;
  height: 4rem;
  border-bottom: 1px solid #000000bb;
  box-shadow: 0px 4.7px 5.3px rgba(0, 0, 0, 0.113),
    0px 15.6px 17.9px rgba(0, 0, 0, 0.167), 0px 70px 80px rgba(0, 0, 0, 0.28);
  z-index: 5;
}

footer {
  min-height: var(--footer-height);
  margin-top: 5vh;
}

.grid {
  overflow: clip;
  display: grid;
  transition: grid-template-columns 600ms ease-in-out,
    grid-template-rows 600ms ease-in-out;
  height: var(--grid-height);
  grid-template-columns: 4fr 5fr;
  grid-template-rows: 5fr 4fr;
  background-color: var(--black);

  &[data-page="sobre"] {
    grid-template-columns: 1fr 0fr;
    grid-template-rows: 1fr 0fr;
  }

  &[data-page="projetos"] {
    grid-template-columns: 0fr 1fr;
    grid-template-rows: 1fr 0fr;
  }

  &[data-page="contato"] {
    grid-template-columns: 1fr 0fr;
    grid-template-rows: 0fr 1fr;
  }
}

.card {
  position: relative;
  background-size: cover;
  background-position: center;
  filter: sepia(5%) saturate(50%);
  transition: outline 200ms, outline-offset 200ms;
  outline: 1px solid #ffffff00;
  --outline-color: var(--white);
  --outline-offset: -0.4rem;

  &:hover {
    outline-offset: var(--outline-offset);
    outline: 1px solid var(--outline-color);
  }

  &#sobre {
    background-position: 75% 45%;
    background-image: linear-gradient(to top, #000000bb 30%, transparent 60%),
      url("assets/images/office2.jpg");

    &[data-page="sobre"] {
      outline-offset: var(--outline-offset);
      outline: 1px solid var(--outline-color);
    }
  }

  &#projetos {
    grid-row: span 2;
    background-position: 30% 20%;
    background-image: linear-gradient(to top, #000000bb 10%, transparent 50%),
      url("assets/images/bird.jpg");

    &[data-page="projetos"] {
      outline-offset: -0.6rem;
      outline: 1px solid var(--outline-color);
    }
  }

  &#contato {
    background-position: 30% 45%;
    background-image: linear-gradient(to top, #000000bb 15%, transparent 60%),
      url("assets/images/graydock.jpg");

    &[data-page="contato"] {
      outline-offset: var(--outline-offset);
      outline: 1px solid #ffffff;
    }
  }
}

.card .grid-link {
  position: absolute;
  display: flex;
  color: var(--white);
  inset: 0;
  align-items: end;
  padding: 0 0.8rem 0rem;
  font-size: 48px;
}

#__nuxt {
  min-height: 100vh;
}

@media screen and (max-width: 990px) {
  .grid {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    &[data-page="sobre"] {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 0fr 0fr;
    }

    &[data-page="projetos"] {
      grid-template-columns: 1fr;
      grid-template-rows: 0fr 1fr 0fr;
    }

    &[data-page="contato"] {
      grid-template-columns: 1fr;
      grid-template-rows: 0fr 0fr 1fr;
    }
  }

  .card#projetos {
    grid-row: span 1;
  }
}
</style>
