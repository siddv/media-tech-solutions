<template>
  <div class="home" :style="{backgroundColor: randomColor}">
    <MtsLogo class="logo"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MtsLogo from '@/components/MtsLogo.vue';

export default {
  name: 'home',
  components: {
    MtsLogo,
  },
  computed: {
    randomColor: () => `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  },
};
</script>

<style lang="scss" scoped>
  .logo {
    left: 50%;
    max-width: 400px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
</style>

