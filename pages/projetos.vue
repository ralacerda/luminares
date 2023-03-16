<template>
  <div>
    <Head>
      <Title>Luminares Arq - Projetos</Title>
    </Head>
    <div class="page-title">
      <h2>Projetos</h2>
      <p>Transformando espaços</p>
    </div>

    <div class="prose flow content">
      <div class="index">
        <span> Lista de projetos </span>
        <ul>
          <li>Histórico-Moderno</li>
          <li>Refúgio Urbano</li>
          <li>Cúpula Urbana</li>
          <li>Casa de Vidro</li>
          <li>Casa Serena</li>
          <li>Espaço Vivo</li>
        </ul>
      </div>
      <p>
        <strong>Nossos projetos</strong> mais recentes e cativantes estão aqui
        para lhe inspirar. Desde espaços residenciais até projetos comerciais,
        cada um é minuciosamente elaborado para atender às necessidades e
        expectativas únicas dos nossos clientes. Aqui, você encontrará soluções
        de design inovadoras e personalizadas que refletem nossa paixão e
        compromisso com a excelência.
      </p>

      <p>
        Em nosso portfólio, você encontrará uma ampla variedade de projetos de
        design de interiores e arquitetura, desde ambientes minimalistas e
        modernos até espaços acolhedores e tradicionais.
      </p>

      <p>
        Nós trabalhamos em estreita colaboração com nossos clientes durante todo
        o processo de design para garantir que cada projeto seja único e atenda
        às suas expectativas. Desde a seleção de materiais e acabamentos até o
        layout do espaço, estamos sempre abertos às sugestões e feedback de
        nossos clientes para garantir que cada projeto atenda às suas
        necessidades e gostos pessoais.
      </p>
      <LinkHome />
    </div>
    <PageFooter />
  </div>
</template>

<style lang="scss">
.index {
  float: left;
  margin: 12px 2rem 1.5rem -6rem;
  background-color: white;
  padding: 1.2rem 2.4rem 1.2rem 1.2rem;
  line-height: 2;

  & span {
    margin-bottom: 0.4rem;
    font-weight: 600;
    font-size: var(--size-2);
  }

  & ul {
    list-style-position: inside;
  }

  & li {
    font-size: var(--size-1);
    color: var(--blue);
  }
}

@media screen and (max-width: 990px) {
  .index {
    float: none;
    margin: 0;
    width: fit-content;
  }
}
</style>
