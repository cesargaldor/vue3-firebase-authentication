<template>
  <div>
    <img :src="svg" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const svg = ref(require('../../assets/img/fashion.svg'));

    return {
      svg,
    };
  },
});
</script>
