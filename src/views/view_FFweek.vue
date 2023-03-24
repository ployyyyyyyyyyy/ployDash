<template>
    <FFweek />
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import FFweek from '../components/FFweek.vue';
  
  export default defineComponent({
    name: 'FFweek1',
  
    components: {
      FFweek,
    },
  });
  </script>
  