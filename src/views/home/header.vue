<template>
  <div class="header">
    <h1>logo</h1>
    <div class="nav">
      <ul>
        <li v-for="(item, i) in navList" :key="i">
          <router-link :to="{ path: item.path }">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  data () {
    return {
    }
  },
  computed: {
    navList () {
      return [
        {
          name: this.$t('home.home'),
          path: '/'
        },
        {
          name: this.$t('home.products'),
          path: '/products'
        },
        {
          name: this.$t('home.videos'),
          path: '/videos'
        },
        {
          name: this.$t('home.news'),
          path: '/news'
        },
        {
          name: this.$t('home.contact'),
          path: '/contact'
        },
      ]
    }
  },
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
