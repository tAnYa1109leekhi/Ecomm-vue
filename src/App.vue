<template>
  <div>
    <router-link to="/home">
      <Menubar />
    </router-link>
    
    <router-view
      :baseURL="baseURL"
      :categories="categories"
      :products="products"
    ></router-view>
  </div>
</template>




<script>

import Menubar from './components/menubar.vue';


import axios from 'axios';
export default {
  components: { 
    Menubar,
   },
  data() {
    return {
      baseURL : "https://limitless-lake-55070.herokuapp.com/",
      products: [],
      categories: []
    }
  },
  methods: {
    async fetchData() {

      // api call to get all the categories
      await axios.get(this.baseURL + "category/")
      .then(res => {
        this.categories = res.data
      }).catch((err) => console.log('err', err));
     // api call to get the products

      await axios.get(this.baseURL + "product/")
      .then(res => {
        this.products = res.data
      }).catch((err) => console.log('err', err));
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

