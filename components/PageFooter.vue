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
      <ul class="socials">
        <li>
          <a
            href="https://github.com/ralacerda"
            target="_blank"
            aria-label="Github"
            ><GithubIcon
          /></a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/renato-ac-lacerda/"
            target="_blank"
            aria-label="Linkedin"
            ><LinkedinIcon
          /></a>
        </li>
        <li>
          <a
            href="https://twitter.com/renatoaclacerda"
            target="_blank"
            aria-label="Twitter"
            ><TwitterIcon
          /></a>
        </li>
        <li>
          <a
            href="https://hachyderm.io/@renato"
            target="_blank"
            aria-label="Mastodon"
            ><MastodonIcon
          /></a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  background-color: var(--black);
  color: var(--white);
  padding-block: var(--grid-margin);
  margin-top: var(--grid-margin);
  justify-items: start;

  & p {
    max-width: 85ch;
    font-size: var(--size-0);
    font-family: var(--font-body);
  }
}

.socials {
  display: flex;
  gap: 0.8rem;
  list-style: none;

  & :any-link {
    font-size: var(--size-1);
    transition: 200ms;
    color: var(--white);

    &:hover {
      color: var(--blue);
    }
  }
}
</style>
