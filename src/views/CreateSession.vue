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
          @click="$router.push('/home')"
        />

        <h2>Nirvana</h2>
      </div>
    </v-app-bar>

    <v-container fluid class="container">
     
    </v-container>
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang="scss" scoped>

</style>
