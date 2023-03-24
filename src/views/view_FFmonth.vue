<template>
    <FFmonth />
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import FFmonth from '../components/FFmonth.vue';
  
  export default defineComponent({
    name: 'FFmonth1',
  
    components: {
      FFmonth,
    },
  });
  </script>