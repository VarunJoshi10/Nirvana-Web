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
        <v-btn text>
          <v-icon size="24px"> mdi-account-circle-outline </v-icon>
        </v-btn>
      </v-app-bar>

      <h1 class="txt-near-places">Categories</h1>

      <v-row>
        <category-card></category-card>
        <category-card></category-card>
        <category-card></category-card>
        <category-card></category-card>
      </v-row>

      <h1 class="txt-near-places">What’s happening near you</h1>

    </v-container>
    <!-- <location-dialog /> -->
  </div>
</template>

<script>
import LocationDialog from "@/components/LocationDialog.vue";
import CategoryCard from '@/components/CategoryCard.vue';

export default {
  components: { LocationDialog, CategoryCard },
  data() {
    return {
      key: value,
    };
  },
};
</script>

<style>
.txt-near-places {
    margin: 3rem;
}
</style>
