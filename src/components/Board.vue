<template>

<div class="board">

 <!--  this is the board -->

 <card panelID="A" 

  v-on:cardFlipped="alertFlip" /></card>
 
 <card panelID="B" 

  v-on:cardFlipped="alertFlip" /></card>

 <card panelID="C" 

  v-on:cardFlipped="alertFlip"></card>

 <card panelID="A" 

  v-on:cardFlipped="alertFlip"></card>

 <card panelID="C" 

  v-on:cardFlipped="alertFlip"></card>

 <card></card>

 <card></card>

 <card></card>




</div>
</template>

<script>
import Card from './Card.vue'


// v-on:bulbClicked="catchBulbCLick" />


	export default {
		name : 'board',
    components : {
      Card
    },
    	
		methods: {
			clickedPanel: function(panelID){
				console.log('ya clicked: ' + panelID);
				isClicked = true;
			},
      alertFlip: function(panelID){
        console.log('you clicked me ' + panelID);
        console.log(' your pair counter is ' + this.counter);
        
        if(this.card1===''){
          this.card1=panelID;
          console.log("this is card 1: " + this.card1);
        }
        else if(this.card2===''){
          this.card2=panelID;
          console.log("this is card 2 : " + this.card2);
        }
        this.pairCount();
        this.checkPair();

      },
      pairCount: function(){
        this.counter++;

      },
      checkPair: function(){
        if(this.counter===2){
        console.log('this will test for a win');
        console.log("your two cards are: " + this.card1 + ", and " + this.card2);

          if(this.card1 === this.card2){

            alert("we got a match!");
          }
          else{
            console.log('not a match, i\'ll reset the cards');
            setTimeout(this.resetCard, 3000);

          }


        
        
          }



      },
      resetCard: function(){
        this.counter=0;
        // this.$emit('resetFlip', this.flip);
        console.log("reset card");
        this.card1='';
        this.card2='';
        
      },
      resetFlip: function(){
        this.flip = !this.flip;
        
      }
		},
		
		data () {
    return {
      counter: 0,
      card1: '',
      card2: ''
    		}
  		}
	}

</script>

<style>
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


/* We need to set the margin used on flex items to 0 as we have gaps in grid.  */

@supports (display: grid) {
  .wrapper > * {
    margin: 0;
  }
}
</style>