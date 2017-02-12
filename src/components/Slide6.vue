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
    name: 'slide6',
    data() {
      return {
        headline: 'Optimizing css',
        title: 'Make sure to keep your CSS lean, deliver it as quickly as possible, and use media types and queries to unblock rendering.',
        description: [
          "CSS is a render blocking resource. Get it to the client as soon and as quickly as possible to optimize the time to first render.",
          "Media types and media queries allow us to mark some CSS resources as non-render blocking.",
          "The browser downloads all CSS resources, regardless of blocking or non-blocking behavior."
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