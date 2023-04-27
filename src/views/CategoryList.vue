<template>
  <v-container fluid>
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
    <v-row>
      <v-col v-for="(session, index) in sessionList" :key="index">
        <v-card class="mx-auto" max-width="370">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            class="white--text align-end"
            height="200px"
            :src="session.imageLink"
          >
            <v-card-title class="text-h5 mb-1"
              >{{ session.title }}<br />{{ session.eventArea }}</v-card-title
            >
          </v-img>
          <v-img
            class="white--text align-end"
            height="180px"
            src="../assets/BACKG.png"
          >
            <v-card-subtitle class="pb-0 card-subtitle">
              <p><span style="font-weight: bold">Details</span></p>
            </v-card-subtitle>
            <v-card-text class="pb-0 card-subtitle1 text-vcard">
              {{ session.eventDescription }}<br />
              <span style="font-weight: bold">Date:</span>
              {{ session.eventDate }}
              <span style="font-weight: bold"> Time:</span>
              {{ session.eventTime }} <br />
              <span style="font-weight: bold">Venue:</span>
              {{ session.eventAddress }}
              <br />
            </v-card-text>
          </v-img>
          <v-card-actions>
            <v-btn color="accent" class="my-btn"> Add to My Session </v-btn>
            <v-btn class="my-btn" color="accent"> Get Contact </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { collection, where, query, getDocs } from "firebase/firestore";
import { db } from "@/main";

export default {
  methods: {
    async getCategoryList(type) {
      const q = query(
        collection(db, "all_events"),
        where("eventType", "==", type)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        this.sessionList.push(doc.data());
      });
    },
  },

  async created() {
    this.id = this.$route.params;

    console.log(this.id);

    // GET data category wise

    console.log(typeof this.id);

    if (this.id.id === "0") {

      this.getCategoryList("music");

    } else if (this.id.id === "1") {

      this.getCategoryList("sports");

    } else if (this.id.id === "2") {

      this.getCategoryList("photography");

    } else if (this.id.id === "3") {
      
      this.getCategoryList("petting");
    }
  },
  data() {
    return {
      sessionList: [],
      id: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("../assets/BACKG.png");
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.card-subtitle1 {
  color: rgb(24, 11, 11);
}
.card-subtitle {
  color: rgb(24, 11, 11);
  font-size: 18px;
  border-bottom: 2px solid transparent; /* set a transparent border to make space for the custom border */
  border-image: linear-gradient(to right, #8b00dbc2, #8b00dbc2) 1; /* create a gradient border */
  border-image-slice: 1 0.000001cm; /* set the border to repeat only 1cm */
  font-family: sans-serif !important;
}
.text-vcard {
  font-family: sans-serif !important;
}
.text-h5 {
  font-size: 18px !important; /* adjust the font size as per your requirement */
  margin-bottom: 1em; /* adjust the margin value as per your requirement */
  /* set the font family to Montserrat */
}
/* 10 over cricket match */
p {
  line-height: 0.3;
}

.my-btn {
  padding: 20px !important;
}
</style>
