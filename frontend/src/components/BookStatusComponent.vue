<template>
    <v-card>
        <v-text-field
            label="Regular"
            single-line
            v-model="title"
            readonly
        ></v-text-field>
        <v-text-field
            label="Regular"
            single-line
            v-model="barcode"
            readonly
        ></v-text-field>
        <v-overflow-btn
          class="my-2"
          :items="statuses"
          label="Overflow Btn"
        ></v-overflow-btn>

        <v-btn color="primary" type="submit">Update Book</v-btn>

    </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import BooksModule, {Book} from '../store/modules/BooksModule';


@Component
export default class BookStatusComponent extends Vue {
    @Prop({default: 'Lolita'}) private title: string;
    @Prop({default: 0}) private title_id: number;
    @Prop({default: ''}) private barcode: string;
    @Prop({default: 'Available'}) private status: string;

    private statuses = ['Damaged', 'Lost', 'Sabotaged', 'Notes in book']
    

    private form: Book = {
      status: this.status,
      title_id: this.title_id,
      barcode: this.barcode,
      created_at: "",
      updated_at: ""
    };
  

  private onSubmit(evt: Event) {
    evt.preventDefault();
    BooksModule.update(this.form);
    alert('Book Updated')
  }
}
</script>

<style scoped>

</style>