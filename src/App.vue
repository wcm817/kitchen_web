<template>
  <div id="app">
    <dc-header></dc-header>
    <router-view />
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
</style>
