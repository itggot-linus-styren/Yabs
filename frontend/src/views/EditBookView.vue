<template>
  <div>
    <v-img
      :src="title.cover"
      lazy-src="https://picsum.photos/id/11/100/60"
      aspect-ratio="1"
      class="grey lighten-2"
      max-width="500"
      max-height="300"
    >
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          />
        </v-row>
      </template>
    </v-img>
    <BookConditionComponent
      :title="title.name"
      :condition="book.condition"
      :barcode="book.barcode"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import BooksModule from '../store/modules/BooksModule';
import BookConditionComponent from '../components/BookConditionComponent.vue';
import TitlesModule from '../store/modules/TitlesModule';
import { Title, Book } from '@/types';

@Component({
  components: {
    BookConditionComponent
  }
})
export default class EditBook extends Vue {
  private book: Book;
  private title: Title;

  private async created(){
    this.book = BooksModule.fetchSingle(this.$route.params.id);

    this.title = TitlesModule.fetchSingle(this.book.title_id);
  }

}
</script>
