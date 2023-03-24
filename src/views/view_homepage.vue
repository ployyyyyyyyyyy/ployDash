<template>
    <homepage />
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import homepage from '../components/homepage.vue';
  
  export default defineComponent({
    name: 'homepage1',
  
    components: {
      homepage,
    },
  });
  </script>