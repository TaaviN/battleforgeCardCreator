<template>
  <div class="page-container">
    {{ msg }}
    <md-button class="md-raised">Default</md-button>
    <md-button class="md-raised md-primary">Primary</md-button>
    <md-button class="md-raised md-accent">Accent</md-button>
    <md-button class="md-raised md-warn">Warn</md-button>
    <md-button class="md-raised md-primary" disabled>Disabled</md-button>
    <md-button class="md-raised md-dense">Dense</md-button>
  </div>
</template>

<script>
export default {
  name: 'feed',
  data () {
    return {
      msg: 'Feed'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-container{
  max-width: 500px;
  margin: auto;
}
</style>
