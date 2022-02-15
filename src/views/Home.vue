<template>
     <div>
          <Moviments/>
          <Charts/>
          <Assets/>
     </div>
</template>

<script>
     import Moviments from '../components/moviments.vue';
     import Charts from '../components/charts.vue';
     import Assets from '../components/assets.vue';

     export default {
          name: "Home",
          components: {
               Moviments,
               Charts,
               Assets
          }
     };

</script>