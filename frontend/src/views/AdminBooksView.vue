<template>
  <div>
    <h1 class="display-2">
      Books
    </h1>
    <div class="flex">
      <div style="margin-right: 50px">
        <BookFormComponent />
      </div>
      <div>
        <BookListComponent />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import BooksModule from '../store/modules/BooksModule';
import BookFormComponent from '@/components/BookFormComponent.vue';
import BookListComponent from '@/components/BookListComponent.vue';
import TitlesModule from '../store/modules/TitlesModule';

@Component({
  components: {
    BookFormComponent,
    BookListComponent
  }
})
export default class AdminBooksView extends Vue {

  // created is the constructor of the admin books view that instantiates the class by
  // fetching all the books and all the titles
  private created() {
    BooksModule.fetchAll();
    TitlesModule.fetchAll();
  }
}
</script>

<style scoped>
.flex {
  display: flex;
}

.flex > div {
  flex: 1;
}
</style>
