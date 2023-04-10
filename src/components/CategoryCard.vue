<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="300">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="20"
        indeterminate
      ></v-progress-linear>
    </template>
    

    <v-img height="400" :src="imageSrc"></v-img>
  </v-card>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
  },
};
</script>
