<template>
  <div id="app">
    <dc-header></dc-header>
    <div class="app-content">
      <router-view />
    </div>
    <dc-footer></dc-footer>
  </div>
</template>

<script>
import { initRootFontSize } from './utils/rem.js';
import DcHeader from '@/components/header.vue';
import DcFooter from '@/components/footer.vue';
export default {
  name: 'App',
  components: {
    DcHeader,
    DcFooter
  },
  data () {
    return {}
  },
  created () { },
  mounted () {
    initRootFontSize();
  },
  methods: {}
}
</script>
<style lang="scss">
.app-content {
  padding-top: 1.33rem;
}
</style>
