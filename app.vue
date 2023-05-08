<script setup>
import "@/assets/styles/globals.scss";

const route = useRoute();

const pageKey = {
  "/": "index",
  "/aboutus": "aboutus",
  "/contact": "contact",
  "/projects": "projects",
};

const page = computed(() => {
  return pageKey[route.path];
});

useServerSeoMeta({
  title: "Luminares Arq",
  ogTitle: "Luminares Arq",
  description:
    "This is the website of a fictional architecture company called Luminares Arq.",
  ogDescription:
    "This is the website of a fictional architecture company called Luminares Arq.",
  ogImage: "https://luminares-arq.netlify.app/meta.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <Head>
    <Link rel="icon" href="/favicon.ico" sizes="any" />
    <Link rel="icon" href="/icon.svg" type="image/svg+xml" />
  </Head>
  <header id="header">
    <h1>
      <NuxtLink to="/" class="text-blue">Luminares Arq</NuxtLink>
    </h1>
  </header>
  <div class="grid" :data-page="page">
    <div class="card" id="aboutus" :data-page="page">
      <Transition name="fade">
        <NuxtLink class="grid-link" to="/aboutus" v-show="page == 'index'"
          >About Us</NuxtLink
        >
      </Transition>
    </div>
    <div class="card" id="projects" :data-page="page">
      <Transition name="fade">
        <NuxtLink class="grid-link" to="/projects" v-show="page == 'index'"
          >Projects</NuxtLink
        >
      </Transition>
    </div>
    <div class="card" id="contact" :data-page="page">
      <Transition name="fade">
        <NuxtLink class="grid-link" to="/contact" v-show="page == 'index'"
          >Contact</NuxtLink
        >
      </Transition>
    </div>
  </div>
  <NuxtPage />
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

.grid {
  overflow: clip;
  display: grid;
  transition: grid-template-columns 600ms ease-in-out,
    grid-template-rows 600ms ease-in-out;
  height: var(--grid-height);
  grid-template-columns: 4fr 5fr;
  grid-template-rows: 5fr 4fr;
  background-color: var(--black);

  &[data-page="aboutus"] {
    grid-template-columns: 1fr 0fr;
    grid-template-rows: 1fr 0fr;
  }

  &[data-page="projects"] {
    grid-template-columns: 0fr 1fr;
    grid-template-rows: 1fr 0fr;
  }

  &[data-page="contact"] {
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

  &#aboutus {
    background-position: 65% 45%;
    background-image: linear-gradient(to top, #000000bb 30%, transparent 60%),
      var(--background-image);

    &[data-page="aboutus"] {
      outline-offset: var(--outline-offset);
      outline: 1px solid var(--outline-color);
    }
  }

  &#projects {
    grid-row: span 2;
    background-position: 30% 20%;
    background-image: linear-gradient(to top, #000000bb 10%, transparent 50%),
      var(--background-image);

    &[data-page="projects"] {
      outline-offset: -0.6rem;
      outline: 1px solid var(--outline-color);
    }
  }

  &#contact {
    background-position: 30% 45%;
    background-image: linear-gradient(to top, #000000bb 15%, transparent 60%),
      var(--background-image);

    &[data-page="contact"] {
      outline-offset: var(--outline-offset);
      outline: 1px solid #ffffff;
    }
  }
}

@media screen and (max-width: 960px) {
  .card {
    &#aboutus {
      --background-image: url("./images/office2-small.webp");
    }

    &#projects {
      --background-image: url("./images/bird-small.webp");
    }

    &#contact {
      --background-image: url("./images/graydock-small.webp");
    }
  }
}

@media screen and (min-width: 960px) {
  .card {
    &#aboutus {
      --background-image: url("./images/office2.webp");
    }

    &#projects {
      --background-image: url("./images/bird.webp");
    }

    &#contact {
      --background-image: url("./images/graydock.webp");
    }
  }
}

.card .grid-link {
  position: absolute;
  display: flex;
  color: var(--white);
  inset: 0;
  align-items: flex-end;
  padding: 0 0.8rem 0rem;
  font-size: var(--size-5);
}

#__nuxt {
  min-height: 100vh;
}

@media screen and (max-width: 990px) {
  .grid {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    &[data-page="aboutus"] {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 0fr 0fr;
    }

    &[data-page="projects"] {
      grid-template-columns: 1fr;
      grid-template-rows: 0fr 1fr 0fr;
    }

    &[data-page="contact"] {
      grid-template-columns: 1fr;
      grid-template-rows: 0fr 0fr 1fr;
    }
  }

  .card#projects {
    grid-row: span 1;
  }
}
</style>
