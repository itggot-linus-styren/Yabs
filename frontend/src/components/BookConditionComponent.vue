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
import { Book, BookForm } from '@/types';

@Component
export default class BookStatusComponent extends Vue {
  @Prop({default: 'No Data'}) private title!: string;
  @Prop({default: 0}) private title_id!: number; //eslint-disable-line camelcase
  @Prop({default: ''}) private barcode!: string;
  @Prop({default: 'Unavailable'}) private status!: string;
  @Prop({default: ''}) private note!: string;

  private statuses: string[] = ['Damaged', 'OK', 'Other'];


  private form: BookForm = {
    condition: this.status,
    title_id: this.title_id, //eslint-disable-line camelcase
    barcode: this.barcode
  };


  private onSubmit(evt: Event): void {
    evt.preventDefault();
    BooksModule.update(this.form);
    alert('Book Updated');
  }
}
</script>

<style scoped>

</style>
