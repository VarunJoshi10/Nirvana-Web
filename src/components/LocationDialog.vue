<template>
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
    <v-dialog
      transition="dialog-top-transition"
      max-width="800"
      v-model="dialogOpen"
    >
      <v-card>
        <v-toolbar color="secondary" dark>Choose your Location</v-toolbar>
        <v-container fluid>
          <v-row dense>
            <v-col v-for="card in cards" :key="card.title" :cols="card.flex"
              ><v-card @click="selectCard(card)">
                <v-img
                  :src="card.img"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                >
                  <v-card-title v-text="card.title"></v-card-title>
                </v-img>
              </v-card> </v-col
          ></v-row>
        </v-container>
      </v-card>
    </v-dialog>
    <h1>What’s happening near you</h1>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      shouldOpenDialog: true,
      cards: [
        {
          title: "Pune",
          img: "https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Shaniwar-wada.jpg",
          flex: 3,
        },
        {
          title: "Mumbai",
          img: "https://www.nativeplanet.com/img/2017/11/2-27-1511786593.jpg",
          flex: 3,
        },
        {
          title: "Bangalore",
          img: "https://www.fabhotels.com/blog/wp-content/uploads/2018/10/1000x650-235.jpg",
          flex: 3,
        },
        {
          title: "Hyderabad",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGoKuP7ievj6L-0xKcaA0CU5ESRZqDSZD6Eg&usqp=CAU",
          flex: 3,
        },
      ],
    };
  },

  methods: {
    dialogOpen() {
      return this.shouldOpenDialog;
    },
    selectCard(card) {
      this.shouldOpenDialog = false;
      console.log("Selected Card:", card.title);
      this.dialogOpen();
    },
  },
};
</script>

<style>

</style>