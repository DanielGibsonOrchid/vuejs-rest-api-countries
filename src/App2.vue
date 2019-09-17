<template>
  <div id="app">
    <Header />
    <SearchBar />
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Header from './components/Header.vue'
import SearchBar from './components/SearchBar.vue'

export default {
  name: 'app',
  components: {
    Home,
    Header,
    SearchBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,600,800&display=swap');

#app {
  font-family: 'Nunito Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #111517;
  font-size: 14px;
  background-color: #f9f9f9;
}

body {
  margin: 0;
}
</style>
