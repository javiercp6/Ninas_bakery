<template>
  <section class="dark:bg-gray-900">
    <div class="bg-img-1 section-custom-1 grid content-center">
      <div class="container px-6 mx-auto z-10">
        <div class="flex flex-col mb-16 items-center text-center">
          <h2 class="title-font text-3xl mb-4 font-medium text-primary-light">
            Unique Flavors and Fresh Ingredients
          </h2>
          <h2 class="mb-8 leading-relaxed text-2xl text-gray-600">
            Contact us by whatsApp
          </h2>
          <div class="flex justify-center">
            <NuxtLink
              to="https://api.whatsapp.com/send?phone=+17862509297&text=Hi"
              target="_blank"
            >
              <button
                class="inline-flex text-white bg-primary-light border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded-lg text-lg"
              >
                whatsApp
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.bg-img-1 {
  background: url(@/assets/bg-cta-1.jpg) no-repeat center;
  background-size: cover;
  position: relative;
}
.section-custom-1 {
  min-height: 33.59375vw;
  /* min-height: calc(50vh); */
  /* min-height: 33.59375vw;
      min-height: calc(100vh - 60px); */
  padding-bottom: 60px;
  padding-top: 60px;
}
/* .bg-img-1::before {
      background-color: rgba(255, 255, 255, 0.8);
  } */

/* @media only screen and (max-width: 1023px) {
    .bg-img-1::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(255, 255, 255, 0.8);
  }
  } */
</style>
