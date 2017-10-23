<template>


    <div class="panel-body">
         
                <div v-for="card in list">
 {{ card.uid }} 
                </div>
             
    </div>

</template>


<script>
    import Firebase from 'firebase'
    import { db } from '../initFirebase'
    
    var cardsRef = db.ref('cards');
    
    export default{
        name: 'allcards',
        firebase: {
            items:cardsRef
        }, 
            
         
    data: function () {
        // get list from firebase and bind it to this.list
        this.$bindAsObject('list', cardsRef);
        return {
            list: this.list
        };
    },
            
        
  
   methods: {
      
      removeCard: function (card) {
        cardsRef.child(card['.key']).remove()
        
      }
    },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .md-input-container {

        min-height: 48px;
        margin: 4px 0 14px !important;
        padding-top: 16px;

    }
</style>
