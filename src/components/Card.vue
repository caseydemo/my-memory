<template>

<div class="card">

<div class="wrapper">

  <!-- v-bind:class="{'flipPanel' : flip}" -->
    
<!-- v-on:resetFlip="flipClass" -->

    
  <button class="panel" 
    id="panelA" v-bind:class="{'flipPanel' : flip}" v-on:click="reportClickToParent(panelID)"></button>

  </div>
</div>
  
</template>

<script>
	export default {
		name : 'card',
    props : [ 'panelID' ],
    data: function() {
      
      return{

      flip: false,
      card: 'card'
        }
      
    },
		
    // reportClickToParent : function( colorClicked ) {
    //         this.$emit( 'bulbClicked', colorClicked );

		methods: {
			reportClickToParent: function(panelID){
				
				this.flip = !this.flip; // reverses the card's class
        this.$emit('cardFlipped', panelID); // this "emits" out the custom event "cardFlipped"
                                            // this triggers when a card is clicked
          },
          flipClass: function(){
            // this.flip=!this.flip;
          }    
			},  		
	};

</script>

<style scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  margin: 40px;
  font-family: 'Open Sans', 'sans-serif';
  background-color: #fff;
  color: #444;
}

h1,
p {
  margin: 0 0 1em 0;
}
.turnRed{
	background-color: red;
}

.wrapper {
  max-width: 940px;
  margin: 0 20px;
  display: grid;
  grid-gap: 100px;
}


/* no grid support? */

.wrapper {
  display: flex;
  flex-wrap: wrap;
}

.wrapper {
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(110px, auto);
}

.panel {
  /* needed for the flex layout*/
  margin-left: 1px;
  margin-right: 1px;
  flex: 1 1 350px;
}
.header,
.footer {
  margin-left: 5px;
  margin-right: 5px;
  flex: 0 1 100%;
  grid-column: 1 / -1;
}

.wrapper > * {
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
  margin-bottom: 10px;
}

.flipPanel{
  background-color: red;
}

/* We need to set the margin used on flex items to 0 as we have gaps in grid.  */

@supports (display: grid) {
  .wrapper > * {
    margin: 0;
  }
}


</style>