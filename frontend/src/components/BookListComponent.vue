<!--
  This vue template takes all the books and places them into an array due to the prop
  "items" from the parent component.
-->

<template>
  <ListComponent
    :headers="headers"
    :items="booksModule.allAsArray"
    :route-path="'books'"
    :route-specifier="'barcode'"
    class="elevation-1"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import BooksModule from '../store/modules/BooksModule';
import { VuexModule } from 'vuex-module-decorators';
import ListComponent from '@/components/ListComponent.vue';

@Component({
  components: {
    ListComponent
  }
})
export default class BookListComponent extends Vue {
  private booksModule: VuexModule = BooksModule;
  
  // these headers are the headers for the table created in the template and are filled 
  // with the information passed from the BooksModule
  
  public headers: object[] = [
    { text: 'Titel', value: 'title.name' },
    { text: 'Skick', value: 'condition' },
    { text: 'Sträckkod', value: 'barcode' },
  ];
}
</script>

<style lang="sass" scoped>
    .card
        width: 100%
        height: 100%
        overflow-y: auto
</style>
