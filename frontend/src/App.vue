<template>
  <HeaderNav/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderNav from '@/components/HeaderNav.vue'; // @ is an alias to /src

@Component({
  components: {
    HeaderNav,
  },
})
export default class App extends Vue {}
</script>
