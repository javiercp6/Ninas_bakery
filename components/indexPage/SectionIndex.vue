<template>
  <section class="bg-img-1 section-custom-1 grid content-center">
    <div class="container px-6 mx-auto z-10">
      <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
      >
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary-light">
          Delicius
          <br class="hidden lg:inline-block" />sweets for you
        </h1>
        <h2 class="mb-8 leading-relaxed text-2xl text-gray-600">
          Nina´s Bakery offers the bestcakes and sweets for you.
        </h2>
        <div class="flex justify-center">
          <NuxtLink to="/products">
            <button
              class="inline-flex text-white bg-primary-light border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded-lg text-lg"
            >
              View products
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-img-1 {
  background: url(@/assets/bg-img-1.jpg) no-repeat center;
  background-size: cover;
  position: relative;
}
.section-custom-1 {
  /* min-height: 33.59375vw; */
  /* min-height: calc(50vh); */
  min-height: 33.59375vw;
  min-height: calc(100vh - 60px);
  padding-bottom: 60px;
  padding-top: 60px;
}
/* .bg-img-1::before {
    background-color: rgba(255, 255, 255, 0.8);
} */

@media only screen and (max-width: 1023px) {
  .bg-img-1::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
}
</style>
