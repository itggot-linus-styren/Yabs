<template>
  <div class="app">
    <HeaderNav/>
    <router-view/>
  </div>
</template>

<style lang="sass">
  .app
    width: 100vw
    height: 100vh
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderNav from '@/components/HeaderNav.vue';

@Component({
  components: {
    HeaderNav,
  },
})
export default class App extends Vue {}
</script>
