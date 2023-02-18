<template>
    <div class="login-container">
      <form>
        <h2>Login</h2>
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit" @click.prevent="submitForm">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      submitForm() {
        // Implement the logic to submit the form
        console.log(`Username: ${this.username} Password: ${this.password}`);
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  form {
    width: 400px;
    background-color: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 0 10px lightgray;
    text-align: center;
  }
  
  h2 {
    margin-bottom: 40px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  input {
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 5px;
    font-size: 14px;
  }
  
  button[type="submit"] {
    background-color: dodgerblue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
  }
  </style>  