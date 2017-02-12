<template>
  <div class="wrapper">
    <div v-for="s in slides">
      <div class="single-slide" v-on:click="goSlide(s.path)">{{ s.id }}. {{ s.name }}</div>
    </div>
  </div>
</template>

<script>
  import router from '../router/index'
  export default {
    name: 'Slides',
    data() {
      return {
        slides: [
          {
            path: '/slides/1',
            name: 'Perfomance goal 1.1',
            id: 1
          },
          {
            path: '/slides/2',
            name: 'Perfomance goal 1.2',
            id: 2
          },
          {
            path: '/slides/3',
            name: 'Eliminating unnecessary downloads',
            id: 3
          },
          {
            path: '/slides/4',
            name: 'Optimizing resources',
            id: 4
          },
          {
            path: '/slides/5',
            name: 'Optimizing images',
            id: 5
          },
          {
            path: '/slides/6',
            name: 'Optimizing css',
            id: 6
          },
          {
            path: '/slides/7',
            name: 'JavaScript optimization',
            id: 7
          },
          {
            path: '/slides/8',
            name: 'Rendering perfomance',
            id: 8
          },
          {
            path: '/slides/9',
            name: 'Tools',
            id: 9
          },
          {
            path: '/slides/10',
            name: 'Developers',
            id: 10
          }
        ]
      }
    },
    methods: {
      goSlide(path) {
        router.push(path)
      }
    }
  }

</script>

<style scoped>
  .wrapper {
    max-width: 1000px;
    width: 90%;
    padding: 50px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .single-slide {
    margin: 20px;
    height: 100px;
    width: 250px;
    background: #42b983;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    padding: 20px;
    cursor: pointer;
    border-radius: 2px;
    font-size: 18px;
  }
</style>