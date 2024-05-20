<script setup>
import FooterBalk from '../components/interactief/FooterBalk.vue'
import NavigatieBalk from '@/components/interactief/NavigatieBalk.vue'
import carousel1 from '@/assets/images/carousel-1.jpg'
import carousel2 from '@/assets/images/carousel-2.jpg'
import carousel3 from '@/assets/images/carousel-3.jpg'
import homePage1 from '@/assets/images/home-page-1.jpg'
import SponsorTabel from '@/components/details/SponsorTabel.vue'
</script>

<template>
  <div class="home">
    <NavigatieBalk />
      <div class="carousel-row" id="carouselWrapper">
          <div id="carouselIndicators" class="carousel slide" data-bs-ride="carousel">
              <div class="scroll-notifier-container">
                  <img class="scroll-notifier" src="@/assets/images/icons/chevron-icon.png" alt="First slide">
              </div>
              <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active"
                      aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1"
                      aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2"
                      aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active" :style="`background-image: url('${carousel1}')`">
                      <div class="carousel-caption">
                          <p class="carousel-caption-top">Ichthus Utrecht</p>
                          <p class="carousel-caption-bottom">Welkom op de website van Ichthus Utrecht!</p>
                      </div>
                  </div>
                  <div class="carousel-item" :style="`background-image: url('${carousel2}')`">
                      <div class="carousel-caption">
                          <p class="carousel-caption-top">Kringen</p>
                          <p class="carousel-caption-bottom">Lees <a class="link-inv"
                                  href="https://ichthusutrecht.nl/activiteiten-geloof">hier</a>
                              meer!</p>
                      </div>
                  </div>
                  <div class="carousel-item" :style="`background-image: url('${carousel3}')`">
                      <div class="carousel-caption">
                          <p class="carousel-caption-top">Evenementen</p>
                          <p class="carousel-caption-bottom">Bekijk de <a class="link-inv"
                                  href="https://ichthusutrecht.nl/agenda">agenda</a>.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="container-fluid font-secondary">
          <div class="row" id="homeWrapper">
              <section class="col-12">
                  <div class="row pt-2">
                      <div class="col-0 col-md-1"></div>
                      <div class="col-12 col-md-10 ">
                          <h1 class="page-title text-blue mb-0">Welkom bij Ichthus Utrecht!</h1>
                          <div class="post-text pt-5 text-center mb-5">
                              Onze vereniging is goed te beschrijven met een uitknipsel van ons verenigingslied: <br>
                              <i>"Daar waar vriendschap, eenheid, kookkunst, immer hoog in 't vaandel staan."</i>
                          </div>
                      </div>
                      <div class="col-0 col-md-1"></div>
                  </div>
              </section>
              <div class="row col-12 justify-content-center">
                  <div class="col-12 col-md-10">
                      <div class="row text-center justify-content-center">
                          <div class="feature col-10 col-md-4 align-top">
                              <img class="feature-image" src="@/assets/images/icons/friendship-icon.png"
                                  alt="Friendship">
                              <div class="post-text section-header text-red text-center">Vriendschap</div>
                              <div class="row">
                                  <div class="col-2 col-md-4"></div>
                                  <hr class="col-8 col-md-4 divider-red" />
                                  <div class="col-2 col-md-4"></div>
                              </div>
                              <div class="w-100 post-text text-center p-4">
                                  Door de wekelijkse kringavonden en diverse verenigingsavonden (o.a. spelletjesavonden,
                                  feesten, lezingen) leren leden elkaar goed kennen. Hierdoor worden vriendschappen voor
                                  het
                                  leven gesloten.
                              </div>
                          </div>
                          <div class="feature col-10 col-md-4 middle align-top" style="z-index: 5;">
                              <div class="row">
                                  <div class="col-div-non-l"></div>
                              </div>
                              <img class="feature-image" src="@/assets/images/icons/unity-icon.png"
                                  alt="Unity">

                              <div class="post-text section-header text-white text-center">Eenheid</div>
                              <div class="row">
                                  <div class="col-2 col-md-4"></div>
                                  <hr class="col-8 col-md-4 divider-white" />
                                  <div class="col-2 col-md-4"></div>
                              </div>
                              <div class="w-100 post-text text-white text-center p-4">
                                  Met een vereniging bestaande uit ongeveer 160 leden met allerlei verschillende
                                  (kerkelijke)
                                  achtergronden en studierichtingen zijn we een breed gezelschap, maar ons geloof in Jezus
                                  Christus en ons studentenleven verbindt ons met elkaar.
                              </div>
                          </div>
                          <div class="feature col-10 col-md-4 align-top">
                              <img class="feature-image no-shadow" src="@/assets/images/icons/gastronomy-icon.png" alt="Gastronomy">
                              <div class="post-text section-header text-red text-center">Kookkunst</div>

                              <div class="row">
                                  <div class="col-2 col-md-4"></div>
                                  <hr class="col-8 col-md-4 divider-red" />
                                  <div class="col-2 col-md-4"></div>
                              </div>
                              <div class="w-100 post-text text-center p-4">
                                  Centraal bij Ichthus Utrecht is de wekelijkse maaltijd op donderdagavond. Met de gehele
                                  vereniging komen we samen om te eten en te genieten van elkaars gezelschap. Deze
                                  maaltijd is
                                  toegankelijk voor iedereen en kent een laagdrempelig karakter.
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <section class="col-12">
                <div class="row quote-container justify-content-center" :style="`background-image: url('${homePage1}')`">
                      <div class="col-10">
                          <div class="mt-5"></div>
                          <div class="row">
                              <div class="col-2 col-md-4"></div>
                              <hr class="col-8 col-md-4 divider-white my-5" />
                              <div class="col-2 col-md-4"></div>
                          </div>
                          <div class="row">
                              <h1 class="quote">
                                  "Dé gezelligste studentenvereniging in Utrecht!"
                              </h1>
                              <p class="quote-origin">
                                  &mdash; Betrouwbare bron
                              </p>
                          </div>
                          <div class="row">
                              <div class="col-2 col-md-4"></div>
                              <hr class="col-8 col-md-4 divider-white my-5" />
                              <div class="col-2 col-md-4"></div>
                          </div>
                          <div class="mt-5"></div>
                      </div>
                  </div>
              </section>
              <section class="col-12">
                  <div class="row justify-content-center">
                      <div class="col-10">
                          <div class="mt-5"></div>
                          Hier moet het nieuws komen
                          <div class="mt-5"></div>
                      </div>
                  </div>
                  <div class="mt-5"></div>
              </section>
              <section class="col-12">
                  <div class="row justify-content-center">
                      <div class="col-10 page-section-header-m">Partners</div>
                      <hr class="col-10 divider-gray" />
                  </div>
                  <SponsorTabel/>
              </section>
              <section class="col-12 mt-2 p-4">
                  <div class="row justify-content-center">
                      <div class="col-10 page-section-header-m">Galerij</div>
                      <hr class="col-10 divider-gray" />
                  </div>
                  <div class="d-block d-md-none">
                      <div class="row row-st-tf justify-content-center d-block d-md-none">
                          <img class="col-12 post-image gallery-image h-100 w-100 m-0 no-shadow" src="@/assets/images/home-1.jpg">
                          <img class="col-12 post-image gallery-image h-100 w-100 m-0 no-shadow" src="@/assets/images/home-2.jpg">
                          <img class="col-12 post-image gallery-image h-100 w-100 m-0 no-shadow" src="@/assets/images/home-3.jpg">
                      </div>
                  </div>
                  <div class="d-none d-md-block">
                      <div class="row row-st-tf justify-content-center">
                          <div class="col-10 h-100 row">
                              <div class="col-6 pt-4 pb-4 pr-4 align-top">
                                  <img class="post-image gallery-image h-100 w-100 m-0 no-shadow p-2" src="@/assets/images/home-1.jpg">
                              </div>
                              <div class="row col-6 h-100">
                                  <div class="col-12 h-50 pl-0 pl-md-4 pr-0 pt-4 pb-4">
                                      <img class="post-image gallery-image h-100 w-100 m-0 no-shadow p-2" src="@/assets/images/home-2.jpg">
                                  </div>
                                  <div class="col-12 h-50 pl-0 pl-md-4 pr-0 pt-4 pb-4">
                                      <img class="post-image gallery-image h-100 w-100 m-0 no-shadow p-2" src="@/assets/images/home-3.jpg">
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
      </div>
    <FooterBalk />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Caveat"); /* Lettertype voor quote en polaroids laden */

#app {
  font-family: sans-serif, Arial, Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

body {
  background: white;
}

.centered-image {
  display: block;
  margin: 0 auto !important;
  width: 90% !important;
  height: auto !important;
}
</style>
