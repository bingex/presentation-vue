<template>
  <div class="slideGoal">
    <h4 class="headline">{{ headline }}</h4>

    <div class="wrapper">
      <p class="title">{{ title }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'slide1',
    data() {
      return {
        headline: 'Perfomance goal 1.1',
        title: 'What is website performance goals? Is it to make your site perform fast? Is it to make your site perform fast on any specific device?'
      }
    }
  }

</script>

<style scoped>
  .slideGoal {
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.7);
    background-blend-mode: multiply;
    background-image: url('../assets/clock.jpg');
  }

  .title {
    line-height: 1.4em;
    color: #ffffff;
    font-size: 30px;
    max-width: 850px;
  }

   @media (max-width: 520px) {
    .title {
      line-height: 1.4em;
      color: #ffffff;
      font-size: 16px;
      max-width: 850px;
    }
  }
</style>
