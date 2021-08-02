<template>
  <div class="sm:px-3 lg:px-20">
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
@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Hind Siliguri', sans-serif;
}

*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-track {
  background-color: #fff;
}

*::-webkit-scrollbar-thumb {
  background: hsla(0, 0%, 31%, 0.473);
}
</style>
