<template>
  <div class="wrapper">
    <form class="login" v-on:submit="submitForm">
      <h1 class="title">Presentation secret key:</h1>

      <div class="control">
        <input class="login-input" type="text" v-model="secret" />
        <button class="btn" type="submit">Start</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        secret: ''
      }
    },
    methods: {
      submitForm(e) {
        e.preventDefault()

        var secret = this.secret;
        if (secret.length > 0) {
          this.$socket.emit('login', secret);
        }
      }
    }
  }

</script>

<style scoped>
  .wrapper {
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('../assets/main.png');
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .login-input {
    margin-top: 15px;
    height: 32px;
    border: none;
    outline: none;
    padding: 2px 10px;
    font-size: 16px;
    border-radius: 3px 0 0 3px;
    width: 220px;
    max-width: 90%;
  }
  
  .control {
    display: flex;
    justify-content: center;
  }
  
  .btn {
    font-weight: bold;
    margin-top: 15px;
    height: 36px;
    border: none;
    outline: none;
    padding: 2px 15px;
    font-size: 16px;
    border-radius: 0 3px 3px 0;
    color: white;
    background-color: #8bc34a;
    transition: all 0.2s linear;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #668444;
  }
  
  .login-input:active {
    border: none;
    outline: none;
  }
  
  .login-input:focus {
    border: none;
    outline: none;
  }
  
  .title {
    font-size: 26px;
    color: #ffffff;
    margin-bottom: 0;
  }
</style>