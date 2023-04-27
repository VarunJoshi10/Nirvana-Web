<template>
    <div>
      <v-chip-group
        v-model="selection"
        active-class="secondary white--text"
        style="width: 100%; display: flex; justify-content: space-around;"
      >
        <v-chip color="secondary" label link outlined pill large class="custom-chip">Baner</v-chip>
        <v-chip color="secondary" label link outlined pill large class="custom-chip">Kothrud</v-chip>
        <v-chip color="secondary" label link outlined pill large class="custom-chip">Balewadi</v-chip>
        <v-chip color="secondary" label link outlined pill large class="custom-chip">Lavale</v-chip>
        <v-chip color="secondary" label link outlined pill large class="custom-chip">Aundh</v-chip>
      </v-chip-group>
    </div>
  </template>
  <script>
  export default {
      data() {
          return {
              selection: 1,
          }
      },
  }
</script>
  
<style scoped>
.custom-chip {
  min-width: 300px; /* Adjust this value as per your requirement */
  text-align: center;
  font-weight: bold;
  border-width: 2px;
}
</style>