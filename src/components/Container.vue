<template>
  <div class="cont">
    <div class="select-cont">
      <div class="select-group one">
        <label for="select-type">Filter by Type</label>
        <select id="select-type" v-model="selectedType">
          <option value="All">All</option>
          <option value="Woodcut">Woodcut</option>
          <option value="Engraving">Engraving</option>
          <option value="Lithograph">Lithograph</option>
          <option value="Screen print">Screen Print</option>
          <option value="Blueprint">Blueprint</option>
          <option value="Diazotype">Diazotype</option>
          <option value="Positive photostat print">Positive photostat print</option>
          <option value="Photomechanical print">Photomechanical print</option>
        </select>
      </div>
      <div class="select-group">
        <label for="select-culture">Filter by Culture</label>
        <select id="select-culture" v-model="selectedCulture">
          <option value="All">All</option>
          <option value="French">French</option>
          <option value="American">American</option>
          <option value="German">German</option>
          <option value="Japanese">Japanese</option>
          <option value="British">British</option>
        </select>
      </div>
    </div>
    <Card 
      v-for="card in filterByType"
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
      selectedType: 'All',
      selectedCulture: 'All'
    }
  },

  computed: {
    filterByType: function() {
      const type = this.selectedType;
      const culture = this.selectedCulture;

      if (type === 'All' && culture === 'All') {
        return this.museumData
      } else {
        return this.museumData.filter(print => {
          return (type === 'All' || print.technique === type) &&
            (culture === 'All' || print.culture === culture);
        })
      }
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
  .select-cont {
    display: flex;
    justify-content: center;
    margin: 1rem;
    width: 100%;
  }
  .select-group {
    background: radial-gradient( rgb(255, 245, 232, 0.5), rgb(255, 245, 232, 0.2), rgb(255, 0, 0, 0));
    box-shadow: 0px 0px 20px 3px rgba(212, 196, 176, 0.3);
  }
  label {
    color: #342c21;
    font-weight: bold;
    line-height: 2rem;
    margin: 0 1rem;
  }
  select {
    background-color: #fff5e8;
    border: 2px solid #ffa048;
    border-radius: 5px;
    height: 2.1rem;
    outline-color: #ffa048;
  }
  select option {
    background-color: #fff5e8;
  }
  .one {
    margin: 0 10rem 0 0;
  }
</style>
