<template>
  <div id="app">
    <v-touch v-on:swipeleft="nextSlide" v-on:swiperight="prevSlide">
      <router-view></router-view>

      <div class="btn-wrapper" v-if="$route.name !== 'Login' && $route.name !== 'Slides'">
        <button v-on:click="prevSlide">Prev</button>
        <button v-on:click="nextSlide">Next</button>
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
        console.log(2)
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
</style>