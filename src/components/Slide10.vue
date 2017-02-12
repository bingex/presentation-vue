<template>
  <div class="slideDevs">
    <div>
      <div class="dev" v-for="item in description">
        <img class="image" width="150" v-bind:src="item.img" alt="item.name " />
        <p class="title">
          <span class="name">{{ item.name }}</span>
          <span class="who">{{ item.whois }}</span>
          <span class="twitter" href="item.twitter">{{ item.twitter }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'slide10',
    data() {
      return {
        headline: 'Tools',
        description: [
          {
            img: "../static/ilya.jpeg",
            name: "Ilya Grigorik",
            whois: "Google Developer Advocate and Web Perf Guru.",
            twitter: "@igrigorik"
          },
          {
            img: "../static/paul.webp",
            name: "Paul Lewis",
            whois: "Google Design and Perf Advocate.",
            twitter: "@aerotwist"
          },
          {
            img: "../static/addy.jpg",
            name: "Addy Osmani",
            whois: "Work on Google Chrome, proggresive web app guru.",
            twitter: "@addyosmani"
          }
        ]
      }
    }
  }

</script>


<style scoped>
  .slideDevs {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .dev {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
  }
  
  .image {
    width: 180px;
    border-radius: 100%;
  }
  
  .title {
    padding-left: 20px;
  }
  
  .name {
    font-size: 24px;
    font-weight: bold;
  }
  
  .who {
    color: #576267;
  }
  
  .twitter {
    color: #1da1f2;
  }
</style>