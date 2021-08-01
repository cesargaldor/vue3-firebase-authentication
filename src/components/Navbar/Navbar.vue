<template>
  <div>
    <nav class="w-full py-4 flex justify-between items-center">
      <div class="">
        <svg viewBox="0 0 64 64" class="w-10">
          <g id="Blue">
            <path
              d="m61 50a5.91 5.91 0 0 0 -3-5l-1.166-.7a1.784 1.784 0 0 1 -3.128-1.712l.063-.126-15.769-10.462v-4a4 4 0 0 0 -4-4h-4a4 4 0 0 0 -4 4v4l-15.769 10.462.063.126a1.784 1.784 0 0 1 -3.128 1.712l-1.166.7a5.91 5.91 0 0 0 -3 5v3l29-19 29 19z"
              fill="#cdeef6"
            />
            <g fill="#4f83d1">
              <path d="m33 24h-2v-6h1a3 3 0 1 0 -3-3h-2a5 5 0 1 1 6 4.9z" />
              <path d="m29 28h2v2h-2z" />
              <path d="m33 28h2v2h-2z" />
              <path d="m8 49h48v2h-48z" />
              <path d="m29 28h2v2h-2z" />
              <path d="m33 28h2v2h-2z" />
              <path
                d="m58.515 44.143-1.166-.7a1 1 0 0 0 -1.373.344.79.79 0 0 1 -.508.369.765.765 0 0 1 -.6-.112.789.789 0 0 1 -.27-1.006l.063-.126a1 1 0 0 0 -.34-1.284l-15.321-10.165v-3.463a5.006 5.006 0 0 0 -5-5h-1v-3.1a5 5 0 1 0 -6-4.9h2a3 3 0 1 1 3 3h-1v5h-1a5.006 5.006 0 0 0 -5 5v3.463l-15.322 10.165a1 1 0 0 0 -.34 1.284l.061.122a.79.79 0 0 1 -.268 1.01.77.77 0 0 1 -.6.112.79.79 0 0 1 -.508-.369 1 1 0 0 0 -1.373-.344l-1.171.7a6.911 6.911 0 0 0 -3.479 5.857v3a1 1 0 0 0 1.548.836l4.329-2.836h48.246l4.329 2.836a1 1 0 0 0 1.548-.836v-3a6.914 6.914 0 0 0 -3.485-5.857zm-47.585 4.857 21.07-13.8 21.07 13.8zm49.07 2.149-27.452-17.985a1 1 0 0 0 -1.1 0l-27.448 17.985v-1.149a4.927 4.927 0 0 1 2.515-4.143l.466-.28a2.794 2.794 0 0 0 1.111.529 2.741 2.741 0 0 0 2.148-.4 2.794 2.794 0 0 0 1.193-2.844l15.12-10.031a1 1 0 0 0 .447-.831v-4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4a1 1 0 0 0 .447.833l15.12 10.031a2.8 2.8 0 0 0 1.193 2.844 2.748 2.748 0 0 0 2.148.4 2.794 2.794 0 0 0 1.111-.529l.461.277a4.93 4.93 0 0 1 2.52 4.144z"
              />
            </g>
          </g>
        </svg>
        <!-- <button
          @click="login"
          v-if="!getUser"
          class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Login
        </button>
        -->
        <button
          @click="logout"
          v-if="getUser"
          class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Logout
        </button>
      </div>
      <div>
        <select v-model="$i18n.locale">
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
            {{ lang === 'es' ? 'Español' : 'English' }}</option
          >
        </select>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  methods: {
    ...mapActions(['login', 'logout']),
  },
  computed: {
    ...mapGetters(['getUser']),
  },
  data() {
    return {
      langs: ['es', 'en'],
    };
  },
};
</script>

<style lang=""></style>
