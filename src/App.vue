<template>
  <div class="px-32">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import Navbar from './components/Navbar/Navbar.vue';
import store from './store/index';

export default {
  name: 'Home',
  components: { Navbar },
  setup() {
    const checkAuthenticatedUser = () => {
      store.dispatch('checkAuthenticatedUser');
    };

    checkAuthenticatedUser();

    return {
      checkAuthenticatedUser,
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Hind Siliguri', sans-serif;
}
</style>
