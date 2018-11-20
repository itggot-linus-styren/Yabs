<template>
  <div class="app">
    <HeaderNav/>
    <router-view/>
  </div>
</template>

<style lang="sass">

  html, body
    width: 100vw
    height: 100vh
  
  .app
    width: 100vw
    height: 100vh

  .view
    position: absolute
    top: 56px
    bottom: 0
    width: 100%
    display: flex
    flex-direction: row

    
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
