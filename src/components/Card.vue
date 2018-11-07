<template>
  <div class="card">
    <h2><span>Artist:</span> {{ card.people[0].name}}</h2>
    <p><span>Type:</span> {{ card.technique }}</p>
    <p><span>Culture:</span> {{ card.culture }}</p>
    <p><span>Century:</span> {{ card.century }}</p>
    <img :src="card.primaryimageurl" alt="print photo">
  </div>
</template>
<script>
  export default {
    name: 'card',
    props: {
      card: Object
    }
  }
</script>
<style scoped>
  .card {
    background-color: #fff5e8;
    border: solid 3px #342c21;
    border-radius: 5px;
    box-shadow: 0px 4px 23px 2px #272119;
    margin: .5rem;
    min-width: 22rem;
    padding: 0;
  }
  h2 {
    background-color: #fdcd9f;
    border-bottom: solid 2px;
    border-radius: 5px 5px 0 0;
    font-size: 1.2rem;
    margin: 0;
    padding: .5rem;
  }
  span {
    font-weight: bold;
  }
  img {
    height: 10rem;
  }
</style>