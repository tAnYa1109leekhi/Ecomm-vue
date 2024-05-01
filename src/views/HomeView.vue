<template>
  <div>
    <banner></banner>
    <aboutus></aboutus>
    <register></register>

  </div>
</template>

<script>

import banner from '../components/banner.vue';
import aboutus from '../components/aboutus.vue';
import Register from '../components/register.vue';

export default {
  components: { menubar, banner , aboutus, Register },
  setup(){
  
  }
}

</script>
