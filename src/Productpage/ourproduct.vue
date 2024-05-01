<template>
    <div class="card h-100 w-100">
      <div class="embed-responsive embed-responsive-16by9">
        <img
          class="card-img-top embed-responsive-item"
          :src="product.imageURL"
          alt="Product image"
        />
      </div>
      <div class="card-body">
        <h5 class="card-title">{{product.name }}</h5>
        <p class="card-text">{{product.description.substring(0,90) }}...</p>
        <a href="#" class="btn btn-primary">Add to cart</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "OurProduct",
    props: {
      product: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .card-img-top {
    object-fit: cover;
  }
  </style>
  