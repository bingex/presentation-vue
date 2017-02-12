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
    name: 'slide5',
    data() {
      return {
        headline: 'Optimizing images',
        title: 'Images often account for most of the downloaded bytes on a web page and also often occupy a significant amount of visual space.',
        description: [
          "Leverage CSS3 effects where possible",
          "Use web fonts instead of encoding text in images",
          "Prefer vector formats: vector images are resolution and scale independent, which makes them a perfect fit for the multi-device and high-resolution world.",
          "Minify and compress with GZIP SVG assets.",
          "Use raster image optimization tools (gifsicle - create and optimize GIF images, jpegtran - optimize jpeg images, optipng - lossless PNG optimization, pngquant - lossy PNG optimization). Experiment with it.",
          "Use responsive images."
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