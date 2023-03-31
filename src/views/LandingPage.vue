<template>
 
    <v-container fluid>
      <v-row justify="center" align="center">
            <v-col cols="6" class="text-center"
      justify="center"><p class="my-text">Live out your passion <br>
              in a community of <br>
            like-minded people</p>
            <v-btn large
    color  = "secondary"
    class  = "text-black"
   width="750px">Log In</v-btn><br><br><v-btn large
    color  = "secondary"
    class  = "text-black"
   width="750px">Sign Up</v-btn></v-col>
            <v-col cols="6" class="text-center"><v-img src="../assets/imagelp.png" style="max-width: 800px;"></v-img></v-col>
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
  background-image: url('../assets/BACKG.png');
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;}
.btn-black-text {
  color: black;
}
.my-text {
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 75px;
  font-weight: 750;
  
}</style>