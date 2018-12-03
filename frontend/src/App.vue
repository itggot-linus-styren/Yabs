<template lang="pug">
  .app
    HeaderNav
    router-view

</template>

<style lang="sass">
  
  .app
    width: 100vw
    height: 100vh

  .view
    position: absolute
    z-index: 100
    top: 56px
    bottom: 0
    width: 100vw
    display: flex
    flex-direction: row
    margin: 5000


  @media only screen and (max-width: 808px)
    .view
      flex-direction: column
    
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
