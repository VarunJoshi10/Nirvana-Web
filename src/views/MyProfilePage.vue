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
        <h2 class="hey-user">Hey User !</h2>

        <v-spacer></v-spacer>

        <v-btn class="btn-save-profile" color="secondary" elevation="2"
          >Save Profile</v-btn
        >
      </v-row>

      <v-card height="400" class="card">
        <v-col>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="First Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Last Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Username"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

          
          </v-form>
        </v-col>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hey-user {
  margin: 3rem;
}
.btn-save-profile {
  margin: 3rem;
}
.card {
  margin: 2rem;
}
.interests{
  padding: 2rem;
}
</style>
