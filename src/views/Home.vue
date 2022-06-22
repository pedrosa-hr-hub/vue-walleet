<template>
     <div>
          <Moviments/>
          <Charts/>
          <Assets/>
          <Buy/>
     </div>
</template>

<script>
     import Moviments from '../components/moviments.vue';
     import Charts from '../components/charts.vue';
     import Assets from '../components/assets.vue';
     import Buy from '../components/buy.vue';

     export default {
          name: "Home",
          components: {
               Moviments,
               Charts,
               Assets,
               Buy
          }
     };

</script>