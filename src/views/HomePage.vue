<template>
  <div>

    <v-container fluid class="container">
      <v-app-bar app color="secondary" dark>
        <div class="d-flex align-center">
          <v-img
            alt="Nirvana logo"
            class="shrink mr-2"
            contain
            src="@/assets/nirvanalogo.png"
            transition="scale-transition"
            width="30"
          />

          <h2>Nirvana</h2>
        </div>

        <v-spacer></v-spacer>
        <v-btn text>My Sessions</v-btn>
        <v-btn text @click="$router.push('/myProfilePage')">
          <v-icon size="24px"> mdi-account-circle-outline </v-icon>
        </v-btn>
      </v-app-bar>
      <Carousel></Carousel>     
     <div class="txt-near-places">
      <h1 >Categories</h1>
      <v-row>
        <category-card v-for="(card, index) in cards" :key="index" :image-src="card.img" />
      </v-row></div>
      <div class="txt-near-places"><h1 >Top Locations</h1>
       <location-chips /></div>
     
    </v-container>
    <!-- <location-dialog /> -->
  </div>
</template>

<script>

import CategoryCard from '@/components/CategoryCard.vue';
import LocationChips from '@/components/LocationChips.vue';
import Carousel from '@/components/Carousel.vue';

export default {
  components: { CategoryCard, LocationChips, Carousel },
  data() {
    return {
      cards: [
      {
        category: "Music",
        img: require("@/assets/category-music.png"),
      },
      {
        category: "Sports and fitness",
        img: require("@/assets/category-sports.png"),
      },
      {
        category: "Photography",
        img: require("@/assets/category-photography.png"),
      },
      {
        category: "Pet Sitting",
        img: require("@/assets/category-pets.png"),
      },
    ],
    }
  },
};
</script>

<style>
.container {

  background-image: url("../assets/BACKG.png");
  

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.txt-near-places {
    margin: 3rem;
}
</style>
