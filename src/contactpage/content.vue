<template>
    <div>
      <div class="contact-section padding-tb">
        <div class="container">
          <div class="section-header text-center">
            <span class='subtitle'>{{ conSubTitle }}</span>
            <h2 class='title'>{{ conTitle }}</h2>
          </div>
          <div class="section-wrapper">
            <div class="contact-form">
              <div class="form-group">
                <input class='input-text' type="text" placeholder='Your name * ' />
              </div>
              <div class="form-group">
                <input   class='input-text' type="email" placeholder='Your email * ' />
              </div>
              <div class="form-group">
                <input  class='input-text'  type="number" placeholder='Phone number * ' />
              </div>
              
              <div class="form-group w-100">
                <textarea  class='input-text' name="message" id="message" rows="8" placeholder='Your Message'></textarea>
              </div>
              <div class="form-group w-100 text-center">
                <button class='lab-btn'>
                  <span>{{ btnText }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="map-address-section padding-tb section-bg">
        <div class="container">
          <div class="section-header text-center">
            <h2 class='title'>{{ title }}</h2>
          </div>
  
          <div class="sectionn-wrapper">
            <div class="row flex-row-reverse">
              <div class="col-xl-4 col-lg-5 col-12">
                <div class="contact-wrapper">
                  <div v-for="(contact, index) in contactList" :key="index" class='contact-item'>
                    <div class="contact-thumb">
                      <img src="contact.imgUrl" alt="contact.imgAlt" />
                    </div>
                    <div class="contact-content">
                      <h6 class='title'>{{ contact.title }}</h6>
                      <p>{{ contact.desc }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cols-xl-8 col-12 col-lg-7">
                <Gmap/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </template>
  
  <script>


 
  import Gmap from './map.vue';
  
  export default {
    name: 'Contactpage',
    components: {
      Gmap,
    },
    data() {
      return {
        subTitle: 'Get in touch with us',
        title: "We're Always Eager To Hear From You!",
        conSubTitle: 'Get in touch with Contact us',
        conTitle: 'Fill The Form Below So We Can Get To Know You And Your Needs Better.',
        btnText: 'Send our Message',
        contactList: [
          { imgUrl: "public/images/icon/01.png", imgAlt: "contact icon", title: "Office Address", desc: "1201 park street, Fifth Avenue" },
          { imgUrl: "public/images/icon/02.png", imgAlt: "contact icon", title: "Phone number", desc: "+22698 745 632,02 982 745" },
          { imgUrl: "public/images/icon/03.png", imgAlt: "contact icon", title: "Send email", desc: "admin@shopcart.com" },
          { imgUrl: "public/images/icon/04.png", imgAlt: "contact icon", title: "Our website", desc: "www.shopcart.com" }
        ]
      };
    }
  };
  </script>
  <style scoped>
  .map-address-section{
    background-image: url('../public/images/bg-img/02.jpg');
  }


  
  .contact-item{
   display: flex;
    width:300px;
  
    
  }
  .contact-thumb{
    padding-top:20px;
   
    padding-bottom: 30px;
  }
  .contact-content{
    
    padding-left: 10px;
  }
  .contact-wrapper{
    
    padding-top: 20px;
  }
.input-text{
 
  width:600px;
  padding: 10px;
  
}
  .form-group{
   
   padding: 20px;
    width:100%;
   
  }
  .section-wrapper{
   
    text-align: center;
   
  }
  .subtitle{
    font-weight: 700;
    font-size: larger;
  }
  .title{
    
    color:rgb(119, 118, 118);
  }
  .section-header{
      padding-bottom:10px;
   
  }
.contact-section{
  padding-top: 30px;
 

}

  </style>
  