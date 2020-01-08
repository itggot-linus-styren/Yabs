<template>
  <v-card>
    <v-text-field
      v-model="title"
      label="Regular"
      single-line
      readonly
    />
    <v-text-field
      v-model="barcode"
      label="Regular"
      single-line
      readonly
    />
    <v-overflow-btn
      class="my-2"
      :items="statuses"
      label="Overflow Btn"
    />
    <v-text-field
      v-model="note"
      label="Regular"
      single-line
    />
    <v-btn
      color="primary"
      type="submit"
    >
      Update Book
    </v-btn>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import BooksModule from '../store/modules/BooksModule';
import { Book, Title } from '@/types';

@Component
export default class BookStatusComponent extends Vue {
  @Prop({default: 'No Data'}) private title: string;
  @Prop({default: 0}) private title_id: number;
  @Prop({default: ''}) private barcode: string;
  @Prop({default: 'Unavailable'}) private status: string;
  @Prop({default: ''}) private note: string;

  private statuses = ['Damaged', 'OK', 'Other'];


  private form: Book = {
    barcode: this.barcode,
    condition: this.status,
    note: this.note,
    title_id: this.title_id,
  };


  private onSubmit(evt: Event) {
    evt.preventDefault();
    BooksModule.update(this.form);
    alert('Book Updated');
  }
}
</script>

<style scoped>

</style>
