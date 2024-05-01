<template>
    <div class="clients-section style-2 padding-tb">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="title">{{ title }}</h2>
          <p>{{ desc }}</p>
        </div>
  
        <div class="section-wrapper">
        
          <div class="clients">
            <div v-for="(client, index) in clientsList" :key="index" class="client-list pin ">
              <router-link to="/" class="client-content">
                <span>{{ client.text }}</span>
              </router-link>
  
              <div class="client-thumb">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'Location',
    data() {
      return {
        title: "More Than 60,000 Customers",
        desc: "Buy products on any device with our app & enjoy your time. Just download, install & start shopping.",
        clientsList: [
          {
        
            text: ' North America'
          },
          {
            
            text: ' Greenland'
          },
          {
           
            text: ' Asia'
          },
          {
            
            text: 'South America'
          },
          {
            
            text: 'Africa'
          },
          {
           
            text: ' Australia'
          },
          {
            
            text: ' Russia'
          }
        ]
      };
    }
  });
  </script>
  
  <style scoped>

.client-content:hover{
   
    cursor:pointer;

}
   
.client-list:nth-child(1) .client-content  {
  margin-top: 150px;
  margin-left: 400px;

}


.client-list:nth-child(2) .client-content {
    margin-top: 250px;
  margin-left: 300px;
}

/* Asia */
.client-list:nth-child(3) .client-content {
    margin-top: 60px;
  margin-left: 700px;
}

/* South America */
.client-list:nth-child(4) .client-content {
  margin-top: 100px;
  margin-left: 100px;
}

/* Africa */
.client-list:nth-child(5) .client-content {
    margin-bottom: 100px;
  margin-left: 400px;
}

/* Australia */
.client-list:nth-child(6) .client-content {
    margin-top: 200px;
  margin-left: 850px;
}

/* Russia */
.client-list:nth-child(7) .client-content {
    margin-bottom: 300px;
  margin-left: 900px;
}


  .client-content{
    color:black;
    font-size: large;
    font-weight: 700;
    position:absolute;
  }
  .section-wrapper{
    width: 1000px;
    margin-left: 70px;
    height: 400px;
    border: 2px solid rgb(196, 186, 186);
   background-image: url(/public/images/clients/bg.png);
    
  }
  .section-header{
    padding-bottom: 50px;
    padding-top:20px;
  }
  .title{
   
    padding-bottom:15px;
  }
  p{
  
    font-size: medium;
    font-weight: 600;
    margin: 15px;
    color: rgb(75, 74, 74)
  }
  
 
  </style>
  