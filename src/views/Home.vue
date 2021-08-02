<template>
  <div class="home sm:mt-32 lg:-mt-8">
    <div class="w-full flex sm:flex-col lg:flex-row items-center">
      <div class="sm:w-full lg:w-1/2 flex-1">
        <div class="flex flex-col justify-center items-center p-4 -mt-24">
          <h1 class="sm:text-5xl lg:text-6xl font-bold text-center">
            {{ $t('slogan') }}
            <span class="svg">{{ $t('slogan_under') }}</span>
          </h1>
          <div class="py-4 text-center text-lg">
            <p class="text-gray-500 mt-6">
              {{ $t('slogan_sub') }}
            </p>
          </div>
          <div>
            <button
              @click="login"
              v-if="!getUser"
              class="px-8 py-2 font-bold bg-white hover:bg-black hover:text-white text-black border transition duration-300"
            >
              {{ $t('register') }}
            </button>
          </div>
        </div>
      </div>
      <div
        class="sm:w-full lg:w-1/2 flex-1 flex items-center justify-center sm:-mt-12 lg:mt-0"
      >
        <home-vector />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
import HomeVector from '../components/HomeVector/HomeVector.vue';
import Footer from '../components/Footer/Footer.vue';

export default defineComponent({
  name: 'Home',
  components: { HomeVector, Footer },
  methods: {
    ...mapActions(['login']),
  },
});
</script>

<style scoped>
h1,
span {
  font-family: 'Zilla Slab', serif;
}

.svg {
  background-image: url('../assets/img/span_bg.svg');
  background-repeat: no-repeat;
  background-position: 0 92%;
  background-size: 100%;
  margin: 0 -30px 0 -15px;
  padding: 20px 30px 20px 15px;
}
</style>
