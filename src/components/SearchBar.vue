<template>
  <!-- Top left search bar component -->
  <div class="searchBar">
    <div class="searchContainer">
      <i class="fas fa-search searchIcon"></i>
      <input 
        class="searchInput" 
        type="search" 
        name="search" 
        placeholder="Search for a country..."
      />
    </div>
  <!-- Top right dropdown region selector -->
    <div class="dropdownDiv">
      <!-- Default text changes after selecting a region -->
      <a 
        class="dropdownBtn" 
        v-if="!showAllRegion" 
        v-on:click="showFilter = !showFilter">
          Filter by Region 
          <i class="fas fa-angle-down" />
      </a>
      <a 
        class="dropdownBtn" 
        v-if="showAllRegion" 
        v-on:click="showFilter = !showFilter">
          {{ region }} 
          <i class="fas fa-angle-down" />
      </a>
      <!-- Dropdown list of regions -->
      <ul v-if="showFilter" class="dropdownUL">
        <li>
          <input 
            id="radioAfrica" 
            class="dropdownInput" 
            type="radio" 
            name="africa" 
            value="Africa" 
            v-model="region" 
            v-on:click="showFilter = !showFilter; showAllRegion = true"
          />
          <label for="radioAfrica">Africa</label>
        </li>
        <li>
          <input 
            id="radioAmerica" 
            class="dropdownInput" 
            type="radio" 
            name="america" 
            value="America" 
            v-model="region" 
            v-on:click="showFilter = !showFilter; showAllRegion = true"
          />
          <label for="radioAmerica">America</label>
        </li>
        <li>
          <input 
            id="radioAsia" 
            class="dropdownInput" 
            type="radio" 
            name="asia" 
            value="Asia" 
            v-model="region" 
            v-on:click="showFilter = !showFilter; showAllRegion = true"
          />
          <label for="radioAsia">Asia</label>
        </li>
        <li>
          <input 
            id="radioEurope" 
            class="dropdownInput" 
            type="radio" 
            name="europe" 
            value="Europe" 
            v-model="region" 
            v-on:click="showFilter = !showFilter; showAllRegion = true"
          />
          <label for="radioEurope">Europe</label>
        </li>
        <li>
          <input 
            id="radioOceania" 
            class="dropdownInput" 
            type="radio" 
            name="oceania" 
            value="Oceania" 
            v-model="region" 
            v-on:click="showFilter = !showFilter; showAllRegion = true"
          />
          <label for="radioOceania">Oceania</label>
        </li>
        <!-- After selecting a region this "All Regions" option becomes available -->
        <li v-if="showAllRegion">
          <input 
            id="radioAll" 
            class="dropdownInput" 
            type="radio" 
            name="all" 
            value="All Regions" 
            v-model="region" 
            v-on:click="showFilter = !showFilter"
          />
          <label for="radioAll">All Regions</label>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      // v-if data "showFilter": toggles hide/display dropdown list
      showFilter: false,
      // v-if data "showAllRegion": After first selection "All Regions" option becomes available
      showAllRegion: false,
      // v-model data "region": Automatically updates the dropdown heading text
      region: '',
    };
  },
  methods: {
  }
}
</script>


<style scoped>

/* Search bar styles */
.searchBar {
  padding: 35px 50px;
  display: flex;
  justify-content: space-between;
}

.searchContainer {
  border: none;
  border-radius: 3px;
  box-shadow: 1px 1px 7px 0px rgb(0, 0, 0, 0.1);
  width: 500px;
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding-left: 30px;
}

.searchIcon {
  font-size: 16px;
  color: #848484;
  padding-right: 30px;
}

.searchInput {
  border: none;
  font-size: 14px;
  font-family: 'Nunito Sans', sans-serif;
  width: 420px;
}

/* Dropdown region selector Styles */
.dropdownBtn {
  display: block;
  background: #fff;
  height: 50px;
  width: 110px;
  box-shadow: 1px 1px 7px 0px rgb(0, 0, 0, 0.1);
  padding-right: 60px;
  padding-left: 30px;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
}

.dropdownUL {
  padding-left: 0;
  text-align: left;
  background-color: #fff;
  margin-top: 3px;
  padding: 10px 0; 
  box-shadow: 1px 1px 7px 0px rgb(0, 0, 0, 0.1);
  border-radius: 3px;
  position: absolute;
  width: 200px;
}

.dropdownUL li {
  list-style: none;
  line-height: 2;
  cursor: pointer;
}

.dropdownUL li label {
  cursor: pointer;
  padding: 0 26px;
  display: block;
  width: 148px;
}

.dropdownUL li:hover {
  background-color: #f9f9f9;
}

.dropdownInput {
  height: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  position: absolute;
}

.fa-angle-down {
  position: absolute;
  top: 130px;
  right: 70px;
}

</style>