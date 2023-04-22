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
        <h2 class="hey-user">Hey {{ username }} !</h2>

        <v-spacer></v-spacer>

        <v-btn class="btn-save-profile" color="secondary" elevation="2"
          >Save Profile</v-btn
        >
      </v-row>

      <v-card height="400" class="card">
        <v-col>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="firstname"
              :counter="10"
              :rules="nameRules"
              label="First Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="lastname"
              label="Last Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="username"
              label="Username"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <h3>Interest</h3>
            <v-row>
              <v-checkbox
                class="interest-checkbox"
                v-model="ex4"
                label="music"
                color="indigo darken-3"
                value="indigo darken-3"
                hide-details
              ></v-checkbox>

              <v-checkbox
                class="interest-checkbox"
                v-model="ex4"
                label="sports"
                color="indigo darken-3"
                value="indigo darken-3"
                hide-details
              ></v-checkbox>

              <v-checkbox
                class="interest-checkbox"
                v-model="ex4"
                label="photography"
                color="indigo darken-3"
                value="indigo darken-3"
                hide-details
              ></v-checkbox>

              <v-checkbox
                class="interest-checkbox"
                v-model="ex4"
                label="petting"
                color="indigo darken-3"
                value="indigo darken-3"
                hide-details
              ></v-checkbox>
            </v-row>
          </v-form>
        </v-col>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/main";
import { getAuth } from "firebase/auth";
export default {
  data() {
    return {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
    };
  },

  async mounted() {
    const docSnap = await getDoc(doc(db, "users", getAuth().currentUser.uid));

    if (docSnap.exists()) {
      this.username = docSnap.data().username;
      console.log(docSnap.data().username);

      this.firstname = docSnap.data().firstname;
      this.lastname = docSnap.data().lastname;

      this.email = docSnap.data().email;
    }
  },
};
</script>

<style lang="scss" scoped>
.interest-checkbox {
  margin: 1rem;
}
.hey-user {
  margin: 3rem;
}
.btn-save-profile {
  margin: 3rem;
}
.card {
  margin: 2rem;
}
.interests {
  padding: 2rem;
}
</style>
