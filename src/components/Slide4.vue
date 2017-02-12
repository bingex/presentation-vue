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
    name: 'slide4',
    data() {
      return {
        headline: 'Optimizing resources',
        title: 'he best thing you can do to improve page-load speed is to minimize the overall download size by optimizing and compressing the remaining resources.',
        description: [
          "Minify your code.",
          "Uglify your code.",
          "Use GZIP."
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