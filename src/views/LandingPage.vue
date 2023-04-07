<template>
  <v-container fluid class="container">
    <v-row justify="center" align="center">
      <v-col cols="4" align="center" offset="1">
        <p class="my-text">Live out your passion <br> in a community of <br> like-minded people</p>
        <v-btn large color="secondary" class="btn-black-text" width="750px" @click="$router.push('/login')">Log In</v-btn><br><br>
        <v-btn large color="secondary" class="btn-black-text" width="750px">Sign Up</v-btn>
      </v-col>
      <v-col cols="6" class="text-center"><v-img src="../assets/imagelp.png" style="max-width: 800px;"></v-img></v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('../assets/BACKG.png') no-repeat center / cover;
}

.btn-black-text {
  color: black;
}

.my-text {
  font: 750 65px 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-align: left;
}
</style>
