<template>
    <div class='map-area'>
      <div >
        <iframe class="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118983.74458436227!2d81.5366698774344!3d21.26188552428231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda23be28229%3A0x163ee1204ff9e240!2sRaipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1711296376648!5m2!1sen!2sin"></iframe>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Gmap'
  }
  </script>
  
  <style scoped>
.map-area {
  margin-bottom: 30px;
}

@media (min-width: 992px) {
  .map-area {
    margin-bottom: 0;
  }
}

.map-area .maps {
  width: 100%;
  height: 398px;
  border: 5px solid #ffffff; 
  border-radius: 4px;
}

.map-area .maps iframe {
  width: 100%;
  height: 100%;
}
</style>
  