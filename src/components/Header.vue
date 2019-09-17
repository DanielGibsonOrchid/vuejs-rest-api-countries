<template>
  <div class="header">
    <router-link to="/"><h1>Where in the world?</h1></router-link>
    <a href="#" class="darkmode"><div><img alt="moon icon" src="../assets/moon.jpg"></div><p>Dark Mode</p></a>
  </div>
</template>


<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 0 50px;
  box-shadow: 1px 1px 7px 0px rgb(0, 0, 0, 0.1);
}

a {
  text-decoration: none;
  color: #000;
}

.darkmode {
  background-color: transparent;
  display: inline-block;
  cursor: pointer;
  color: #000;
  padding-top: 25px;
  font-weight: 600;
  display: flex;
  margin-top: 5px;
}

.darkmode p {
  margin: 0 0 0 7px;
}

.darkmode:active {
  position: relative;
  top: 1px;
}
</style>
