<template>
    <month />
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import month from '../components/month.vue';
  
  export default defineComponent({
    name: 'month1',
  
    components: {
      month,
    },
  });
  </script>