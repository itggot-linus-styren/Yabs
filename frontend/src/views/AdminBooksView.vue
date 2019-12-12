<template>
  <div>
    <h1 class="display-2">Books</h1>
    <CreateBookFormComponent />
    <RecentBook />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import CreateBookFormComponent from '@/components/CreateBookFormComponent.vue';
import RecentBook from '@/components/RecentBook.vue';

@Component({
  components: {
    CreateBookFormComponent,
    RecentBook
  }
})
export default class AdminBooksView extends Vue {}
</script>

<style scoped>
</style>
