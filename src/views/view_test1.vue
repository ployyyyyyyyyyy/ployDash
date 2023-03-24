<template>
    <test1 />
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import test1 from '../components/test1.vue';
  
  export default defineComponent({
    name: 'test1',
  
    components: {
      test1,
    },
  });
  </script>