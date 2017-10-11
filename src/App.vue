<template>
  <div id="app">
    <img src="src/assets/brule_2.jpg">
    
    <card1></card1>
     <card2></card2>
    {{ title }}
    
  </div>
</template>

<script>
import Card2 from './components/Card2.vue'



export default {
  name: 'app',
  
  components: {
  'card2': Card2
    },
    data () {
      return {
        title: 'Card Matching Game'
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
body{
  background-color: #333030;

}
</style>
