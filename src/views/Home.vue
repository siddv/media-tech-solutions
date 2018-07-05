<template>
  <div class="home">
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
};
</script>

<style lang="scss" scoped>
  .home {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
  }

  .logo {
    animation: 500s linear infinite slotate;
    max-width: 400px;
    width: 100%;
  }

  @keyframes slotate {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
</style>

