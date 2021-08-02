<template>
  <div>
    <footer class="w-full flex justify-between border-t py-8">
      <div class="flex text-sm text-gray-500">
        <span>Copyright &copy; 2021</span>
        <div class="ml-3">
          <router-link class="px-1" to="/terms">{{ $t('terms') }}</router-link>
          <router-link class="px-1" to="/privacy">{{
            $t('privacy')
          }}</router-link>
          <router-link class="px-1" to="/pricing">{{
            $t('pricing')
          }}</router-link>
        </div>
      </div>
      <div>
        <select v-model="$i18n.locale">
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
            {{ lang === 'es' ? 'Español' : 'English' }}</option
          >
        </select>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      langs: ['es', 'en'],
    };
  },
};
</script>

<style></style>
