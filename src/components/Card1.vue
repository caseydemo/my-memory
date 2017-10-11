<template>

<div class="card1">
hey this is card 1

<p>{{card1}}</p>

</div>


</template>

<script>
	export default {
		name : 'card1',
		
		data () {
    return {
      card1: 'this is card one'
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