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
      <v-col class="add-session-form">
        <h2>Please fill in the following details</h2>

        <v-card height="400" class="card">
          <v-file-input
            v-model="file"
            label="Select an image"
            accept="image/*"
            @change="onFileChange"
          ></v-file-input>
        </v-card>

      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
      imageUrl: null,
    };
  },
  methods: {
    onFileChange() {
      const reader = new FileReader();

      reader.onload = (event) => {
        this.imageUrl = event.target.result;
      };

      reader.readAsDataURL(this.file);
    },
  },
};
</script>

<style lang="scss" scoped>
.add-session-form {
  display: block;
  text-align: center;
  height: 100%;
}
.card {
    margin: 3rem;
}
</style>
