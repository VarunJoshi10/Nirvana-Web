<template>
  <v-container fluid>
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
    <div class="my-text">
      <v-col>
        <h2>Please fill in the following details</h2>

        <v-col class="form-col">
          <v-form v-model="valid" max-width="50">
            <v-col cols="55" sm="100" md="100">
              <v-file-input
                v-model="picture"
                label="Picture"
                accept="image/*"
                required
                outlined
                align="left"
              ></v-file-input>

              <v-text-field label="Add Title" outlined></v-text-field>
            </v-col>

            <v-col cols="72" sm="100" md="100">
              <v-text-field
                v-model="eventhost"
                label="Who is this event's host?"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="72" sm="100" md="100">
              <v-text-field
                v-model="fullname"
                label="Full Name"
                required
                outlined
              ></v-text-field>
            </v-col>

            <v-col cols="72" sm="100" md="100">
              <v-text-field
                v-model="email"
                label="Email"
                required
                outlined
              ></v-text-field>
            </v-col>

            <v-col cols="72" sm="100" md="100">
              <v-text-field
                v-model="phone"
                label="Phone Number"
                required
                outlined
                align="left"
              ></v-text-field>
            </v-col>

            <v-col cols="72" sm="100" md="100">
              <v-overflow-btn
                class="my-2"
                :items="eventtype"
                label="Event Type"
                editable
                outlined
                item-value="text"
              ></v-overflow-btn>

              <v-overflow-btn
                class="my-2"
                :items="eventlitem"
                label="Event Location"
                editable
                outlined
                item-value="text"
              ></v-overflow-btn>

              <v-textarea
                v-model="description"
                label="Event Description"
                required
                outlined
              ></v-textarea>

              <v-menu
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date"
                    label="Event Date"
                    prepend-icon="mdi-calendar"
                    readonly
                    outlined
                    v-on="on"
                    required
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date"></v-date-picker>
              </v-menu>

              <v-text-field
                v-model="time"
                label="Event Time"
                type="time"
                required
                outlined
              ></v-text-field>
            </v-col>

            <v-btn
              :disabled="!valid"
              color="primary"
              medium
              large
              class="center"
              @click="addSession()"
            >
              Add Session
            </v-btn>
          </v-form>
            </v-col
        >
      </v-col>
    </div>
  </v-container>
</template>

<script>
export default {
  methods: {
    addSession() {
      // Handle adding the session here
      console.log("hello");
    },
  },
  data() {
    return {
      title: "",
      fullname: "",
      picture: null,
      description: "",
      menu: false,
      date: null,
      time: "",
      valid: false,
      eventlitem: [
        "Ambegaon Budruk",
        "Aundh",
        "Baner",
        "Bavdhan Khurd",
        "Bavdhan Budruk",
        "Balewadi",
        "Shivajinagar",
        "Bibvewadi",
        "Bhugaon",
        "Bhukum",
        "Dhankawadi",
        "Dhanori",
        "Dhayari",
        "Erandwane",
        "Fursungi",
        "Ghorpadi",
        "Hadapsar",
        "Hingne Khurd",
        "Karve Nagar",
        "Kalas",
        "Katraj",
        "Khadki",
        "Kharadi",
        "Kondhwa",
        "Koregaon Park",
        "Kothrud",
        "Lohagaon",
        "Manjri",
        "Markal",
        "Mohammed Wadi",
        "Mundhwa",
        "Nanded",
        "Parvati (Parvati Hill)",
        "Panmala",
        "Pashan",
        "Pirangut",
        "Shivane",
        "Sus",
        "Undri",
        "Vishrantwadi",
        "Vitthalwadi",
        "Vadgaon Khurd",
        "Vadgaon Budruk",
        "Vadgaon Sheri",
        "Wagholi",
        "Wanwadi",
        "Warje",
        "Yerwada",
      ],
      eventtype: ["Sports", "Music", "Photography", "Petting"],
    };
  },
  watch: {
    title: "validateForm",
    fullname: "validateForm",
    picture: "validateForm",
    description: "validateForm",
    date: "validateForm",
    time: "validateForm",
  },
  mounted() {
    this.validateForm();
  },
  computed: {
    isDateSelected() {
      return !!this.date;
    },
  },
  methods: {
    validateForm() {
      const fields = [
        this.title,
        this.fullname,
        this.picture,
        this.description,
        this.date,
        this.time,
      ];
      this.valid = fields.every((field) => !!field);
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("../assets/BACKG.png");
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.my-text {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 20px;
  font-weight: 150;
  text-align: center;
}
.form-col {
  margin-top: 1rem;
}
</style>
