<template>
  <div id="app">
    <v-touch v-on:swipeleft="nextSlide" v-on:swiperight="prevSlide" class="touch" v-bind:class="{ scrollbar: $route.name === 'Slides' }">
      <transition name="fade">
        <router-view></router-view>
      </transition>

      <div class="btn-wrapper" v-if="$route.name !== 'Login' && $route.name !== 'Slides'">
        <router-link to="/slides" class="btn">All</router-link>
        <button v-on:click="prevSlide" class="btn">Prev</button>
        <button v-on:click="nextSlide" class="btn">Next</button>
      </div>
    </v-touch>
  </div>
</template>

<script>
  import router from './router/index'

  export default {
    name: 'app',
    sockets: {
      connect: function () {
        console.log('Socket connected.')
      },
      slideChange: function (val) {
        if (this.$route && val && this.$route.path !== val.data) {
          router.push(val.data);
        }
      },
      loginSuccess: function () {
        this.$store.dispatch('login', true)
        router.push('/slides');
      }
    },
    methods: {
      prevSlide() {
        var path;
        var pathArr;

        if (!this.$route.path) return false;

        pathArr = this.$route.path.split('/');

        if (pathArr.length === 3) {
          if (pathArr[2] > 1) {
            path = `/slides/${+pathArr[2] - 1}`;
            router.push(path)
            this.$socket.emit('slide-changed', path);
          }
        }
      },

      nextSlide() {
        var path;
        var pathArr;

        if (!this.$route.path) return false;

        pathArr = this.$route.path.split('/');
        if (pathArr.length === 3) {
          if (pathArr[2] < 10) {
            path = `/slides/${+pathArr[2] + 1}`;
            router.push(path);
            this.$socket.emit('slide-changed', path);
          }
        }
      }
    },
    created: function () {
      window.addEventListener('keyup', e => {
        if (e.keyCode === 39) {
          this.nextSlide();
        } else if (e.keyCode === 37) {
          this.prevSlide();
        }
      })
    }
  }

</script>

<style>
  body {
    margin: 0;
    padding: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .touch {
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .scrollbar {
    overflow-y: scroll;
  }

  .slide {
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('./assets/slide.png');
  }

  .btn-wrapper {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  .btn {
    border: 1px solid #000000;
    padding: 5px;
    outline: none;
    background-color: #ffffff;
    cursor: pointer;
    transition: 0.3s ease;
    color: #000000;
    text-decoration: none;
    font-size: 14px;
  }

  .btn:hover {
    background-color: #000000;
    color: #ffffff;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-family: 'Open Sans', sans-serif;
  }

  .sub-wrapper {
    max-width: 850px;
    font-family: 'Open Sans', sans-serif;
  }

  .title {
    line-height: 1.2em;
    color: #2c3c42;
    font-size: 30px;
    padding: 20px;
  }

  @media (max-width: 520px) {
    .title {
      line-height: 1.2em;
      font-size: 16px;
      padding: 5px;
      margin: 5px;
    }
  }

  .description {
    color: #2c3c42;
    font-size: 20px;
    padding: 15px 0;
    line-height: 1.4em;
  }

  @media (max-width: 520px) {
    .description {
      font-size: 14px;
      padding: 2px 0;
      line-height: 1.2em;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-property: opacity;
    transition-duration: .2s;
  }

  .fade-enter-active {
    transition-delay: .2s;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
