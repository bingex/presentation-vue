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


<style>
</style>
