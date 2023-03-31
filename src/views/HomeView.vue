<template>
<<<<<<< HEAD
  <hello-world />
=======
  <div>
    <div class="navbar">
    <div class="navbar-left">
      <router-link to="/" class="navbar-brand">
        Nirvana
      </router-link>
    </div>
    <div class="navbar-right">
      <router-link to="/signin" class="navbar-link">
        Sign in
      </router-link>
      <router-link to="/signup" class="navbar-link">
        Sign up
      </router-link>
    </div>
  </div>
  </div>
>>>>>>> 944efbe9215b27b488d843ece1957069ba6bcfae
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
<<<<<<< HEAD
    name: 'Home',

    components: {
      HelloWorld,
    },
  }
</script>
=======
    name: 'Navbar'
  }
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: white;
  color: #fff;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.navbar-brand {
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #000;
}

.navbar-right {
  display: flex;
}

.navbar-link {
  margin-left: 20px;
  font-size: 18px;
  text-decoration: none;
  color: #000;
}

.navbar-link:hover {
  text-decoration: underline;
}
</style>
>>>>>>> 944efbe9215b27b488d843ece1957069ba6bcfae
