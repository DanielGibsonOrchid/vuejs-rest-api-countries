<template>
  <div class="homepage">
    <div class="tileGrid">
      <div v-for="country in countryInfo" class="countryTile">
        <img v-bind:src="country.flag" alt="Country Flag" class="flag">
        <div class="text">
          <h1>{{ country.name }}</h1>
          <p><span>Population: </span>{{ country.population }}</p>
          <p><span>Region: </span> {{ country.region }}</p>
          <p><span>Capital: </span> {{ country.capital }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'homepage',
  data () {
    return {
      countryInfo: null
    }
  },
  mounted () {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => (this.countryInfo = response.data))
  }
}
</script>

<style scoped>

.tileGrid {
  display: flex;
  flex-wrap: wrap;
  margin: 15px 50px;
  justify-content: space-between;
}

.countryTile {
  display: inline-block;
  background-color: #fff;
  width: 300px;
  margin-bottom: 80px;
  box-shadow: 1px 1px 7px 0px rgb(0, 0, 0, 0.1);
  border-radius: 3px;
  cursor: pointer;
  text-align: left;
  padding-bottom: 40px;
}

.flag {
  height: 180px;
  width: 300px;
}

.text {
  padding-left: 30px;
  padding-right: 20px;
}

.text h1 {
  font-size: 20px;
}

.text p span {
  font-weight: 600;
}

.text p {
  line-height: 1;
}

</style>
