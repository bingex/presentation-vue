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
    name: 'slide3',
    data() {
      return {
        headline: 'Eliminating unnecessary downloads',
        title: 'To deliver great performance we need to optimize delivery of each and every byte!',
        description: [
          "Inventory your own assets and third-party assets on your pages.",
          "Measure the performance of each asset: its value and its technical performance.",
          "Determine if the resources are providing sufficient value."
        ]
      }
    }
  }

</script>

<style>

</style>