<template>
    <div class="category-section style-4 padding-tb">
      <div class="container">
        <div class="section-header text-center">
          <span class="subTitle">{{ subTitle }}</span>
          <h1 class="title">{{ title }}</h1>
        </div>
  
        <!-- Section card -->
        <div class="section-wrapper">
          <div class="row g-4 justify-content-center">
            <div
              v-for="(category, index) in categoryList"
              :key="index"
              class="col-lg-4 col-md-3 col-sm-2 col-12"
            >
              <router-link to="/shop" class="category-item">
                <div class="category-inner">
                  <div >
                    <img :src="category.imgUrl" :alt="category.imgAlt"  class="images" loading ="lazy"/>
                  </div>
                  <!-- Content -->
                  <div class="category-content">
                    <router-link to="/shop">
                      <h6 class="tittle">{{ category.title }}</h6>
                    </router-link>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        subTitle: "Choose Any Products",
        title: "Buy Everything with Us",
       
        categoryList: [
          {
            imgUrl: "public/images/category/01.jpg",
            imgAlt: "category rajibraj91 rajibraj",
            
            title: "DSLR Camera",
          },
          {
            imgUrl: "public/images/category/02.jpg",
            imgAlt: "category rajibraj91 rajibraj",
            
            title: "Shoes",
          },
          {
            imgUrl: "public/images/category/03.jpg",
            imgAlt: "category rajibraj91 rajibraj",
           
            title: "Photography",
          },
          {
            imgUrl: "public/images/category/04.jpg",
            imgAlt: "category rajibraj91 rajibraj",
            
            title: "Formal Dress",
          },
          {
            imgUrl: "public/images/category/05.jpg",
            imgAlt: "category rajibraj91 rajibraj",
           
            title: "Colorful Bags",
          },
          {
            imgUrl: "public/images/category/06.jpg",
            imgAlt: "category rajibraj91 rajibraj",
            
            title: "Home Decor",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>


  .tittle{
    padding-top: 14px;
    font-size: large;
    font-weight: 600;
    color: rgb(77, 75, 76);

  }


  .images{
    width: 230px;
    height: 200px;
    border-radius: 10%;
    border: 5px solid rgb(221, 210, 210);
 }
 .images:hover{
    width: 232px;
    height: 205px;
    border-radius: 10%;
    border: 2.5px solid rgb(221, 210, 210);
 }
  .category-inner{
   
    padding: 10px;
    text-align: center;
  }
   .section-wrapper{
   
    margin-top:18px;
    
   }

 
  .section-header {
    padding-top: 34px;
  }
  .subTitle{
    
    font-size: large;
    font-weight: 500;
    color: rgb(224, 129, 145);
  }


 
  </style>
  