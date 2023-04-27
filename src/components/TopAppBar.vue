<template>
  <div>
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
      <v-btn text @click="$router.push('/MySessions')">My Sessions</v-btn>
      <v-btn text @click="$router.push('/myProfilePage')">
        <v-icon size="24px"> mdi-account-circle-outline </v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
