<template>

<div class="card2">
hey this is card 1

<p>{{card2}}</p>

</div>


</template>

<script>
	export default {
		name : 'card2'
		
		data () {
    return {
      card1: 'this is card two'
    		}
  		}
	}

</script>

<style scoped>
.card1{	
	font-color: #fff;
	font-size:1000;
}
</style>