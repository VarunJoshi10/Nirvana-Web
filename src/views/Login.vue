<template>
  <v-container fluid>
    <div class="my-text">
      <h1>Let's do something special today.</h1>
      <br />
      <h2 class="text-center">Login</h2>

      <v-row>
        <v-col cols="10" offset="1">
          <v-card-text>
            <p class="text-h4 text--primary"></p>

            <v-col cols="72" sm="100" md="100">
              <v-text-field
                label="username"
                v-model="username"
                outlined
                color="secondary"
              ></v-text-field>
              <v-text-field
                label="password"
                type="password"
                v-model="password"
                outlined
              ></v-text-field>
            </v-col>
            <div class="text-colour">
              <a href="#">Forgot Password?</a>
            </div>
            <v-col cols="72" sm="100" md="100"></v-col>
            <br /><br />
            <v-btn
              large
              color="secondary"
              class="btn-black-text"
              width="250px"
              block
              elevation="5"
              
            >
              Login
            </v-btn>
            <br />
            <v-btn
            large
              color="#ffff"
              width="250px"
              block
              elevation="5"
            >
              <v-icon left> mdi-google </v-icon>
              Log in with Google
            </v-btn>
            <br><br>
            <p class="login-txt">Don’t have an account? Create one!</p>
          </v-card-text>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    auth() {
      alert(this.username + " " + this.password);
    },
    signInWithGoogle() {
      this.$gapi.signIn().then((response) => {
        const accessToken = response.access_token;
        this.$gapi.client
          .request({
            path: "/plus/v1/people/me",
            method: "GET",
          })
          .then((response) => {
            const email = response.result.emails[0].value;
            // check if email is registered and log user in
          });
      }); 
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
}
.text-center {
  text-align: center;
}

.login-txt {
  text-align: center;
  text-decoration: underline;
  color: #d9d9d9;
}
</style>
