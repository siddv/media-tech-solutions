<template>
  <div class="wrap">
    <img :src="src">
  </div>
</template>

<script>
import src from '../assets/mtslogo.png';

export default {
  data() {
    return {
      src,
    };
  },
};
</script>

<style lang="scss" scoped>
  .wrap {
    padding: 1rem;

    img {
      background: rgba(255, 255, 255, 0.15);
      display: block;
      padding: 1rem;
      width: 100%;
    }
  }
</style>

