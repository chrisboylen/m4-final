<template>
  <div class="cont">
    <Card 
      v-for="card in museumData"
      v-bind:card="card"
      v-bind:key="card.objectnumber">
      {{card}}
    </Card>
  </div>
</template>

<script>
import Card from '../components/Card';
import { getMuseumData } from '../Utilities/api.js';

export default {
  name: 'Container',
  components: {
    Card
  },

  data() {
    return {
      loading: true,
      museumData: [],
    }
  },

  created() {
    getMuseumData()
      .then(museumData => {
        this.museumData = museumData.records,
        this.loading = false
      })
      .catch(error => {throw new Error(error)})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  display: block;
  font-size: 3rem;
  width: 100%;
}
.cont {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
