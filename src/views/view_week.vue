<template>
    <week />
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import week from '../components/week.vue';
  
  export default defineComponent({
    name: 'week1',
  
    components: {
      week,
    },
  });
  </script>
  