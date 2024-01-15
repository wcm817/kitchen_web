<template>
  <div class="title">
    <div class="title-left"></div>
    <div class="text"> {{ title }}</div>
    <div class="title-right"></div>
  </div>
</template>
<script>
export default {
  name: 'BlockTitle',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.title {
    padding-top: 0.533rem;
    @media screen and (max-width: 750px) {
      padding-bottom: 0.693rem;
    }
    @media screen and (min-width: 751px) {
      padding-bottom: 0.96rem;
    }
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 0.8rem;
    text-align: center;
    font-size: 0.48rem;
    font-weight: 600;
    .text{
      width: 4.533rem;
      white-space: nowrap;
      text-align: center;
    }
    .title-left{
      position: relative;
      width: 25%;
      height: 4px;
      background: linear-gradient(to left, $main-color, transparent);
    }
    .title-right{
      width: 25%;
      height: 4px;
      background: linear-gradient(to right, $main-color, transparent);
    }
  }
</style>
