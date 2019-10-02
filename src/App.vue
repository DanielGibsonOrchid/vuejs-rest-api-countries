<script>
export default {
  name: 'app',
  data () {
    return {
      isDarkTheme: false,
    }
  },
  watch: {
    '$route': {
      handler: (to) => {
        document.title = to.meta.title || '';
      },
      immediate: true
    }
  }
}
</script>

<template>
  <div id="app" :class="{ darkApp : isDarkTheme }">
    <!-- Header -->
    <div class="header" :class="{ darkHeader : isDarkTheme }">
      <div class="headerWrapper">
        <router-link to="/"><h1>Where in the world?</h1></router-link>
        <a @click="isDarkTheme = !isDarkTheme" class="darkModeBtn">
          <div><i class="far fa-moon"></i></div>
          <p>Dark Mode</p></a>
      </div>
    </div>

    <!-- Router-view :key checks if route has changed and reloads same component, :isDarkTheme sends props to component -->
    <router-view :key="$route.fullPath" :isDarkTheme="isDarkTheme" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,600,800&display=swap');

#app {
  font-family: 'Nunito Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #111517;
  font-size: 14px;
  height: 100%;
  background-color: #fff;
}

.darkApp {
  background-color: #202c36 !important;
}

html {
  height: 100%;
}

body {
  margin: 0;
  height: 100%;
}

.header {
  background-color: #fff;
  padding: 0 75px;
  box-shadow: 1px 1px 7px 0px rgb(0, 0, 0, 0.1);
  position: relative;
}

.headerWrapper {
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
}

a {
  text-decoration: none;
  color: #000;
}

.darkModeBtn {
  background-color: transparent;
  display: inline-block;
  cursor: pointer;
  color: #000;
  padding-top: 25px;
  font-weight: 600;
  display: flex;
  margin-top: 5px;
}

.darkModeBtn p {
  margin: 0 0 0 7px;
}

.darkModeBtn:active {
  position: relative;
  top: 1px;
}

/* Dark Theme */
.darkHeader {
  background: #2b3845;
}

.darkHeader h1 {
  color: #fff;
}

.darkHeader a {
  color: #fff;
}

@media (max-width: 875px) {
  .header {
    padding: 0 15px;
  }

  h1 {
    font-size: 18px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .darkModeBtn {
    padding-top: 30px
  }
}
</style>
