<template>
  <div class="slide">
    <h4 class="headline">{{ headline }}</h4>

    <div class="wrapper">
      <div class="sub-wrapper">
        <p class="title">{{ title }}</p>

        <ul>
          <li class="description" v-for="item in description">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'slide8',
    data() {
      return {
        headline: 'Rendering perfomance',
        title: 'Pages should not only load quickly, but also run well; scrolling should be stick-to-finger fast, and animations and interactions should be silky smooth.',
        description: [
          "Avoid setTimeout or setInterval for visual updates; always use requestAnimationFrame instead",
          "Reduce the complexity of your selectors; use a class-centric methodology like BEM.",
          "Reduce the number of elements on which style calculation must be calculated."
        ]
      }
    }
  }

</script>


<style scoped>
  .headline {
    color: #ffffff;
    margin: 0;
    font-size: 18px;
    position: absolute;
    top: 20px;
    left: 20px;
  }
  
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
  .sub-wrapper {
    max-width: 850px;
    font-family: 'Open Sans', sans-serif;
  }
  
  .title {
    line-height: 1.2em;
    color: #2c3c42;
    font-size: 30px;
  }
  
  .description {
    color: #2c3c42;
    font-size: 20px;
    padding: 15px 0;
    line-height: 1.4em;
  }
  
  .image {
    padding-top: 20px;
    display: flex;
    margin: auto;
  }
</style>