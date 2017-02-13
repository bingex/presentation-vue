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
        title: 'The best thing you can do to improve page-load speed is to minimize the overall download size by optimizing and compressing the remaining resources.',
        description: [
          "Minify your code.",
          "Uglify your code.",
          "Use GZIP."
        ]
      }
    }
  }

</script>

<style>
</style>
