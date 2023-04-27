<template>
  <v-container fluid class="container">
    
    <v-app-bar
      app
      color="secondary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Nirvana logo"
          class="shrink mr-2"
          contain
          src="@/assets/nirvanalogo.png"
          transition="scale-transition"
          width="30"
        />

        <h2 >Nirvana</h2>

        
      </div>
      <v-spacer></v-spacer>

        <v-btn text @click="$router.push('/login')">Login</v-btn>
        <v-btn text @click="$router.push('/signUp')">Sign Up</v-btn>

    </v-app-bar>
    
    <v-row justify="center" align="center">
      <v-col cols="4" align="center" offset="1">
        <p class="my-text">Live out your passion <br> in a community of <br> like-minded people</p>
        <br>
        <p class="my-text-2">Get Started</p>
        <br><br>
        <p class="my-text">How it works</p>

        <v-img src="../assets/dash.png" style="max-width: 800px;height: 300;"></v-img>
         
      </v-col>
      <v-col cols="6" class="text-center">
        <v-img src="../assets/imagelp.png" style="max-width: 800px;height: 300;">
      </v-img>
    </v-col>
    </v-row>
  
    </v-container>

 
</template>

<script>
export default {
  
}
</script>

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
  font: 750 50px 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-align: left;
  font-weight: bold;
}
.my-text-2 {
  color: #838383;
  text-align: left;
  font: 30px 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  
}
</style>
