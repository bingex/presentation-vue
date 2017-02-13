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
    name: 'slide7',
    data() {
      return {
        headline: 'JavaScript optimization',
        title: 'When it comes to Javascript there are some best practices to always keep in mind.',
        description: [
          "Move your scripts to the bottom of the page right before your </body> tag.",
          "Use the async or defer directive to avoid render blocking.",
          "Concatenate your JS files into one file (with HTTP/2 this is no longer as important).",
          "Inline your javascript if it is small."
        ]
      }
    }
  }

</script>


<style>
</style>
