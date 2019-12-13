<template>
  <div>
    <h1 class="display-2">
      Titles
    </h1>
    <TitelFormComponent />
    <RecentTitel />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import TitelFormComponent from '@/components/TitelFormComponent.vue';
import RecentTitel from '@/components/RecentTitel.vue';

@Component({
  components: {
    TitelFormComponent,
    RecentTitel
  }
})
export default class AdminTitlesView extends Vue {}
</script>

<style scoped>
</style>
