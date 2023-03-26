<template>
  <date />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import date from '../components/date.vue';

export default defineComponent({
  name: 'date1',

  components: {
    date,
  },
});
</script>
