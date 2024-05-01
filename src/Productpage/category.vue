<template>
   <div class="container">
       <div class="row">
           <div class="col-12 text-center">
               <h4> Our Products</h4>
               
           </div>
       </div>
       <div class="row">>
           <div v-for="product of products" :key="product.id"
                class="col-md-6 col-xl-4 col-12 pt-3 d-flex">
               <ourproduct :product="product"></ourproduct>
           </div>
       </div>
   </div>
</template>
<script>

import Ourproduct from './ourproduct.vue';
   
   export default {
       components: {Ourproduct},
       props:["products"]
   }
</script>
<style scoped>
    .card-img-top {
        object-fit: cover;
    }
</style>