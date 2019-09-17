<template>
  <div class="country-detail">
    <div v-for="country in countryInfo" class="countryTile" v-bind:key="country.id">
      <p>test {{country.name}}</p>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import Header from './Header.vue'

export default {
  name: 'country-detail',
  data () {
    return {
      countryInfo: null
    }
  },
  mounted () {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${this.$route.params.country}`)
      .then(response => (this.countryInfo = response.data))
  },
  // Function to format the population number with commas
  filters: {
    formatNumbers (value) {
      return `${value.toLocaleString()}`
    }
  },
  route: ['params'],
}
</script>

<style scoped>

</style>
