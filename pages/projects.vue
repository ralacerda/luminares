<template>
  <div>
    <Head>
      <Title>Luminares Arq - Projects</Title>
    </Head>
    <div class="page-title">
      <h2>Projects</h2>
      <p>Transforming spaces</p>
    </div>

    <div class="prose flow content">
      <div class="index">
        <span>Featured Projects</span>
        <ul>
          <li>Historic-Modern</li>
          <li>Urban Retreat</li>
          <li>Urban Dome</li>
          <li>Glass House</li>
          <li>Casa Serena</li>
          <li>Live Space</li>
        </ul>
      </div>
      <p>
        <strong>Our latest and most captivating projects</strong> are here to
        inspire you. From residential spaces to commercial projects, each one is
        meticulously crafted to meet the unique needs and expectations of our
        clients. Here, you'll find innovative and personalized design solutions
        that reflect our passion and commitment to excellence.
      </p>
      <p>
        In our portfolio, you'll find a wide variety of interior design and
        architecture projects, from minimalist and modern environments to cozy
        and traditional spaces.
      </p>
      <p>
        We work closely with our clients throughout the design process to ensure
        that each project is unique and meets their expectations. From the
        selection of materials and finishes to the layout of the space, we're
        always open to suggestions and feedback from our clients to ensure that
        each project meets their needs and personal tastes.
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
