<template>
  <div class="menu-bar">
    <div class="container">
      <h1 class="menu-head">Ecommerce</h1>
    </div>
    <ul class="ul-clas">
      <li v-for="(link, index) in Links" :key="index" class="li-class">
        <router-link :to="link.link" class="a-class">{{ link.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {
   return {
      Links: [
        { name: "Home", link: "/home" },
        { name: "Product", link: "/product" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
       
      ]
    };
  }
};
</script>


  
  <style scoped>
  .menu-bar {
    background-color: #3a3434;
    color: #ffffff;
    padding-top: 2.1rem;
    padding-bottom: 1.5rem;
    padding-left: 6rem;
    padding-right: 6rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
 
  
  .container {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  
  .menu-head {
    color: #f3c3e9;
    font-size: 1.25rem;
    margin-right: 0.25rem;
  }
  
  .ul-clas {
    @media (min-width: 768px) {
      /* Flexbox */
      display: flex;
  
      /* Align items */
      align-items: center;
    }
  }
  
  .li-class {
    @media (min-width: 768px) {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
  
  .a-class {
    color: inherit;
  }
  
  .a-class:hover {
    color: #34d399;
  }
  </style>
  