<template>
  <v-carousel height="600" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      class="carousel-image"
    ></v-carousel-item>
  
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("@/assets/C1.png"),
        },
        {
          src: require("@/assets/C2.png"),
        },
        {
          src: require("@/assets/C3.png"),
        },
        {
          src:require("@/assets/C4.png"),
        },
      ],
    };
  },
};
</script>
<style>.carousel-image img {
  max-height: 450px; /* Set the maximum height of the image */
  max-width: 100%; /* Set the maximum width of the image */
  margin: auto; /* Center the image within the carousel */
}</style>

