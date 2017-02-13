<template>
  <div class="slide">
    <h4 class="headline">{{ headline }}</h4>

    <div class="wrapper">
      <div class="sub-wrapper">
        <p class="title">{{ title }}</p>

        <ul>
          <li class="description" v-for="item in description">{{ item }}</li>
        </ul>

        <img class="image" width="200px" src="../assets/happy-user.png" alt="Happy user" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'slide2',
    data() {
      return {
        headline: 'Perfomance goal 1.2',
        title: 'Our goal is to ultimately make users happy. Focus on user.',
        description: [
          "Deliver interactive content in under 1 second. If you don't, user attention wanders, and their perception of dealing with the task is broken.",
          "You have 100ms to respond to user input before they notice a lag. This applies to most inputs, such as clicking buttons, toggling form controls, or starting animations. This does not apply to touch drags or scrolls.",
          "For actions that take longer than 500ms to complete, always provide feedback."
        ]
      }
    }
  }

</script>


<style scoped>
  .image {
    padding-top: 20px;
    display: flex;
    margin: auto;
  }

  @media (max-width: 520px) {
    .image {
      display: none;
    }
  }
</style>
