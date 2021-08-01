<template>
  <div class="home">
    <div class="py-12">
      <div class="flex flex-col justify-center items-center w-1/2 mx-auto">
        <h1 class="text-4xl font-bold tracking-tight">Closet</h1>
        <div class="py-4 text-center text-lg">
          <p>{{ $t('slogan') }}</p>
          <p>{{ $t('slogan_sub') }}</p>
        </div>
        <div>
          <button
            @click="login"
            v-if="!getUser"
            class="px-8 py-2 font-bold bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  name: 'Home',
  components: {},
  methods: {
    ...mapActions(['login', 'logout']),
  },
});
</script>

<style scoped></style>
