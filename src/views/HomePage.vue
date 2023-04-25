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
        <v-btn text @click="$router.push('/categoryList')">My Sessions</v-btn>
        <v-btn text @click="$router.push('/myProfilePage')">
          <v-icon size="24px"> mdi-account-circle-outline </v-icon>
        </v-btn>
      </v-app-bar>
      <Carousel></Carousel>

      <div class="txt-near-places">
        <h1>What’s happening in your city !</h1>
      
        <!-- displaying all sessions -->

        <v-row class="near-places-card">
          <v-col v-for="(session, index) in sessionList" :key="index">
            <v-card elevation="2" height="350" width="300">
              <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
                max-height="170"
                max-width="300"
                :src = session.imageLink
              ></v-img>

              <v-col>
                <v-row class="card-row">
                  <v-icon color="blue">mdi-music</v-icon>
                  <h2 class="card-txt">{{ session.title }}</h2>
                </v-row>
                <v-row class="card-row">
                  <v-icon color="#000">mdi-calendar-range</v-icon>
                  <h2 class="card-txt">{{ session.eventDate}} - {{ session.eventTime }}</h2>
                </v-row>

                <v-row class="card-row">
                  <v-icon color="#000">mdi-map-marker-radius</v-icon>
                  <h2 class="card-txt">{{ session.eventArea }}</h2>
                </v-row>
              </v-col>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <div class="txt-near-places">
        <h1>Categories</h1>
        <v-row>
          <category-card
            v-for="(card, index) in cards"
            :key="index"
            :image-src="card.img"
            @click="navigateToPage(card.route)"
          />
        </v-row>
      </div>
      <div class="txt-near-places">
        <h1>Top Locations</h1>
        <location-chips />
      </div>
    </v-container>
    <!-- <location-dialog /> -->
  </div>
</template>

<script>
import CategoryCard from "@/components/CategoryCard.vue";
import LocationChips from "@/components/LocationChips.vue";
import Carousel from "@/components/Carousel.vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/main";

export default {
  components: { CategoryCard, LocationChips, Carousel },

  async created () {
    const querySnapshot = await getDocs(collection(db, "all_events"));

      querySnapshot.forEach((doc) => {
        this.sessionList.push(doc.data());
      });
  },

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
      sessionList: [],
      methods: {
  navigateToPage(route) {
    this.$router.push('/photography');
  }
}
    };
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

.near-places-card {
  margin: 1rem;
}

.card-row {
  margin: 1rem;
}
.card-txt {
  margin-left: 1rem;
}
</style>
