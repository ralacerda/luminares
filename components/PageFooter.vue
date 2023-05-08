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
        LUMINARES ARQ is a fictitious architecture company. The design and
        development of this website were done with the intention of showcasing
        the ability and expertise in creating a high-quality and functional
        website. All projects and information presented on this website are
        purely fictitious and do not correspond to a real company. All content
        presented here is for illustration purposes only and should not be
        considered true or representative of any existing company. You can read
        more about this project and its developer in the links below.
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
