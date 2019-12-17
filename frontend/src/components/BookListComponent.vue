<!--
  This vue template takes all the books and places them into an array due to the prop
  "items" from the parent component.
-->

<template>
  <v-data-table
    :headers="headers"
    :items="booksModule.allAsArray"
    :items-per-page="5"
    class="elevation-1"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import BooksModule from '../store/modules/BooksModule';
import { VuexModule } from 'vuex-module-decorators';

@Component
export default class BookListComponent extends Vue {
  private booksModule: VuexModule = BooksModule;
  
  // these headers are the headers for the table created in the template and are filled 
  // with the information passed from the BooksModule
  
  public headers: object[] = [
    { text: 'Titel', value: 'title.name', sortable: false },
    { text: 'Status', value: 'status', sortable: false },
    { text: 'Sträckkod', value: 'barcode', sortable: false },
  ];
}
</script>

<style lang="sass" scoped>
    .card
        width: 100%
        height: 100%
        overflow-y: auto
</style>
