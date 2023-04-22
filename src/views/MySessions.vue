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
      </v-app-bar> <div class="txt" ><h1 style="font-weight:800">My Sessions</h1>
      <v-row>
      <h1 >Created Sessions</h1><v-spacer></v-spacer>
        <v-btn color="secondary">My Sessions</v-btn></v-row></div>
        <v-card
  elevation="6"
  tile class="mx-auto my-12"
    max-width="374"
><v-card-title>Cafe Badilico</v-card-title><div class="my-4 text-subtitle-1">
        $ • Italian, Cafe
      </div>
      <v-card-text>
      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text></v-card></v-container>
    </div>
</template>

<script>
   export default {
        
    }
</script>

<style lang="scss" scoped>
.container {

background-image: url("../assets/BACKG.png");


/* Center and scale the image nicely */
background-position: center;
background-repeat: repeat;
background-size: cover;
}
.txt {
    margin: 3rem;
    font-size: large;
    font-weight: 800;
}


</style>