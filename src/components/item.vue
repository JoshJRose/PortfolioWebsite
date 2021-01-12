<template>
  <div class="item">
      <h2>{{ item.title }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
       
    }
  }
}
</script>

<style scoped>

    .itemboard {
        padding: 1em;
        background-color: #121212;
        flex-grow: 6;
        opacity: 85%;
    }
    h2{
        color: gray;
        font-size: 1.5em;
    }

</style>
