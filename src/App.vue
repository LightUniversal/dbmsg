<template>
  <div>
    <HeaderVue />

    <router-view></router-view>
  </div>
</template>

<script>
import HeaderVue from './components/HeaderVue.vue';
export default {
  data() {
    return {
      userExist: false
    }
  },
  components: {
    HeaderVue
  },
  mounted() {
    
  },
}
</script>

<style lang="scss" scoped></style>