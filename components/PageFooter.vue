<script setup>
import GithubIcon from "~icons/simple-icons/github";
import LinkedinIcon from "~icons/simple-icons/linkedin";
import TwitterIcon from "~icons/simple-icons/twitter";
import MastodonIcon from "~icons/simple-icons/mastodon";
</script>

<template>
  <footer>
    <div class="content flow">
      <p>
        LUMINARES ARQ é uma empresa fictícia de arquitetura. O design e o
        desenvolvimento deste site foram feitos com o intuito de mostrar a
        capacidade e expertise em criar um site de alta qualidade e
        funcionalidade. Todos os projetos e informações apresentados neste site
        são puramente fictícios e não correspondem a uma empresa real. Todo o
        conteúdo apresentado aqui é apenas para fins de ilustração e não deve
        ser considerado como verdadeiro ou representativo de qualquer empresa
        existente. Você pode ler mais sobre este projeto e seu desenvolvedor nos
        links abaixo.
      </p>
      <p class="socials">
        <a href="https://github.com/ralacerda" target="_blank"
          ><GithubIcon
        /></a>
        <a href="https://www.linkedin.com/in/renato-ac-lacerda/" target="_blank"
          ><LinkedinIcon
        /></a>
        <a href="https://twitter.com/renatoaclacerda" target="_blank"
          ><TwitterIcon
        /></a>
        <a href="https://hachyderm.io/@renato" target="_blank"
          ><MastodonIcon
        /></a>
      </p>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  background-color: var(--black);
  color: var(--white);
  padding-block: 3rem;
  margin-top: 5vh;
  justify-items: start;

  & p {
    max-width: 85ch;
    font-size: 0.85rem;
    font-family: var(--font-body);
  }
}

.socials {
  font-size: 1rem;
  display: flex;
  gap: 0.8rem;

  & :any-link {
    transition: 200ms;

    color: var(--white);

    &:hover {
      color: var(--blue);
    }
  }
}
</style>
