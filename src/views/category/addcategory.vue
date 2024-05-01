<template>
    <header :class="{ 'header-section': true, 'style-4': true, 'mt-0': true, 'header-fixed': headerfixed, 'fadeInUp': headerfixed }">
      <div :class="{ 'header-top': true, 'd-md-none': true, 'open': socialtoggle }">
        <div class="contanier-head">
          <div class="header-top-area">
            <router-link to="/sign-up" class="lab-btn me-3"><span>Create Account</span></router-link>
            <router-link to="/login">Log in</router-link>
          </div>
        </div>
      </div>
  
      <div class="header-bottom">
        <div class="container">
          <div class="header-wrapper">
            <div class="logo-search">
              <div class="logo">
                
              </div>
            </div>
  
            <!-- menu-bar -->
            <div class="menu-bar">
              <div class="menu">
                <ul :class="{ 'lab-ul': true, 'active': menutoggle }">
                  <li><router-link to="/">Home</router-link></li>
                  <li><RouterLink to="/shop">Shop</RouterLink></li>
                  <li><router-link to="/blog">Blog</router-link></li>
                  <li><router-link to="/about">About</router-link></li>
                  <li><router-link to="/contact">Contact</router-link></li>
                </ul>
              </div>
            </div>
  
            
  
            <div @click="setMenutoggle(!menutoggle)" class="header-bar d-lg-none" :class="{ 'active': menutoggle }">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menutoggle: false,
        socialtoggle: false,
        headerfixed: false
      };
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        if (window.scrollY > 2000) {
          this.headerfixed = true;
        } else {
          this.headerfixed = false;
        }
      },
      setMenutoggle(value) {
        this.menutoggle = value;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your component's scoped styles here */
  </style>
  