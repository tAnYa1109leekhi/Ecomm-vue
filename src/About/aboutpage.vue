<template>
    <div>
      
      <div class="about-section padding-tb section-bg style-3">
        <div class="container">
          <div class="row justify-content-center align-item-center row-cols-xl-2 rol-cols-1">
            <div class="col">
              <div class="about-left">
                <div >
                  <img class="about-thumb" src="/images/about/01.jpg" alt="" />
                </div>
                <div >
                  <img class="abs-thumb" src="/images/about/02.jpg" alt="" />
                </div>
                <div class="about-left-content">
                  <h3>{{ year }}</h3>
                  <p>{{ expareance }}</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="about-right">
                <div class="section-header">
                  <span class="subtitle">{{ subTitle }}</span>
                  <h2 class="title">{{ title }}</h2>
                  <p>{{ desc }}</p>
                </div>
                <div class="section-wrapper">
                  <ul lab-ul>
                    <li v-for="(item, index) in aboutList" :key="index">
                      <div >
                        <img class="sr-left"  :src="item.imgUrl" :alt="item.imgAlt" />
                      </div>
                      <div class="sr-right">
                        <h5>{{ item.title }}</h5>
                        <p>{{ item.desc }}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Aboutpage',
    components: {
      
    },
    data() {
      return {
        subTitle: 'About Our Brand',
        title: 'Good Qualification Services And Better Experiences',
        desc: 'Distinctively provide access to multifunctional users whereas transparent processes incentivize efficient functionalities rather than extensible architecture. Communicate leveraged services and cross-platform.',
        year: '30+',
        expareance: 'Years Of Experiences',
        aboutList: [
          {
            imgUrl: '/images/about/icon/01.jpg',
            imgAlt: 'about icon rajibraj91 rajibraj',
            title: 'Skilled Instructors',
            desc: 'Distinctively provide access to multifunctional users whereas communicate leveraged services',
          },
          {
            imgUrl: '/images/about/icon/02.jpg',
            imgAlt: 'about icon rajibraj91 rajibraj',
            title: 'Get Certificate',
            desc: 'Distinctively provide access to multifunctional users whereas communicate leveraged services',
          },
          {
            imgUrl: '/images/about/icon/03.jpg',
            imgAlt: 'about icon rajibraj91 rajibraj',
            title: 'Online Classes',
            desc: 'Distinctively provide access to multifunctional users whereas communicate leveraged services',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .about-section {
    position: relative;
    background-color: rgb(255, 249, 255);
    padding-top: 50px;
    
}  

.container{
  padding: 50px;
}

.about-left {
    position: relative;
    z-index: 1;
   
}
.about-right {
    position: relative;
    
    line-height: 25px;
    z-index: 1;
}
.about-thumb{
  width:400px;
  position: absolute;

}
.about-left-content{
  color: black;
  position: relative;
  border-radius: 10px;

  top: 360px;
  left: -5px;
  padding-left:10px;
  padding-top:5px;
  background-color: beige;
  width: 160px;
  
}

.about-right .section-header {
  padding-top: 10px;
   font-size: 500;
    
}
.sr-left{
  border-radius: 50%;
}

.about-right .section-header p {
  
    margin-bottom: 0;
   color: rgb(61, 60, 60);
   font-weight:500;
   padding-top: 20px;
}

.about-right .section-wrapper ul li {
    display: flex;
    align-items: center;
    padding-top: 20px;
   
    padding-bottom: 30px;
    
}


.section-wrapper  {
    padding-right:20px;
}

.sr-left{
  
  margin-right: 20px;
  
}



.about-right .section-wrapper ul li .sr-right h5 {
    font-weight: 600;
}

.about-right .section-wrapper ul li .sr-right p {
    max-width: 80%;
}




.abs-thumb {
    position: absolute;
    right: 60px;
    bottom: -500px;
   
}



  </style>
  