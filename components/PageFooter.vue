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
        existente.
      </p>
      <p class="socials">
        Para saber mais sobre este projeto e seu desenvolvedor:
        <a href="#">Linkedin</a>
        <a href="#">Github</a>
        <a href="#">Portfólio</a>
      </p>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  background-color: var(--black);
  color: var(--white);
  outline: 1px solid var(--white);
  outline-offset: -0.4rem;
  gap: 2rem;
  padding: 0.8rem;
  margin-top: 5vh;
  justify-items: start;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));

  & p,
  & a:any-link {
    max-width: 85ch;
    font-size: 0.85rem;
    font-family: var(--font-body);
    color: var(--white);
    width: max-content;
    display: block;
  }

  & a:any-link:hover {
    text-decoration: underline;
  }
}
</style>
