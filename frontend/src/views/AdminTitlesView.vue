<template>
  <div>
    <h1>ya like   T I T L E S   ?   ;)))</h1>
    <TitelForm />
    <RecentTitel />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import TitelForm from '@/components/TitelForm.vue';
import RecentTitel from '@/components/RecentTitel.vue';

@Component({
  components: {
    TitelForm,
    RecentTitel
  }
})
export default class AdminTitlesView extends Vue {}
</script>

<style scoped>
</style>
