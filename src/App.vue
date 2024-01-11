<template>
  <div id="app">
    <dc-header></dc-header>
    <div class="app-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { initRootFontSize } from './utils/rem.js';
import DcHeader from './views/home/header.vue';
export default {
  name: 'App',
  components: {
    DcHeader
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
