<template>
<div id="Error">
   <div class="alert alert-danger" role="alert">
     {{error}}
   </div>
   <h1>
   Error 404
   </h1>
</div>
 

    

</template>

<script>


export default {
  name: 'Error',
  props: [
    'error',
    'message'
  ]
  
}

</script>

<style lang="scss">
@import "../assets/css/styles.css";
@import '../../node_modules/bootstrap/scss/bootstrap.scss';


</style>
