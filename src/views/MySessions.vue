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

      <v-row>
        <h2 class="create-session-txt">Created Session</h2>

        <v-spacer></v-spacer>

        <v-btn @click="$router.push('/createSession')" class="btn-create-session" color="secondary" elevation="2"
          >create session</v-btn
        >
      </v-row>

      <v-row class="near-places-card">
          <v-col v-for="(session, index) in sessionList" :key="index">
            <v-card elevation="2" height="400" width="300">
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
              <v-btn width="300" class="card-btn" color="secondary">Delete Session</v-btn>
            </v-card>
          </v-col>
        </v-row>

        <h2 class="create-session-txt">Scheduled Session</h2>

    </v-container>
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/main";
export default {
  async created () {
    const querySnapshot = await getDocs(collection(db, "all_events"));

      querySnapshot.forEach((doc) => {
        this.sessionList.push(doc.data());
      });
  },
  data() {
    return {
      sessionList: []
    }
  },
};
</script>

<style lang="scss" scoped>
.create-session-txt{
  margin: 3rem;
}
.btn-create-session{
  margin: 3rem;
}
.card-btn {
  position: absolute;
  bottom: 0;
}
</style>
