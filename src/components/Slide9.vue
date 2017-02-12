<template>
  <div class="slideTools">
    <div class="description" v-for="item in description" v-bind:style="{backgroundImage: 'url(' + item.img + ')'}"></div>
  </div>
</template>

<script>
  export default {
    name: 'slide9',
    data() {
      return {
        description: [
          {
            name: "Google Chrome DevTools.",
            img: "../static/devtools.png"
          },
          {
            name: "Google PageSpeed: https://developers.google.com/speed/pagespeed.",
            img: "../static/pagespeed.png"
          },
          {
            name: "Google Chrome Lighthouse: https://github.com/GoogleChrome/lighthouse.",
            img: "../static/lighthouse.jpg"
          },
          {
            name: "Other tools: https://www.pingdom.com, https://gtmetrix.com",
            img: "../static/devtools.png"
          }
        ]
      }
    }
  }

</script>


<style scoped>
  .slideTools {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
  }
  
  .description {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    flex-grow: 2;
    width: 50%;
    height: 50%;
  }
</style>