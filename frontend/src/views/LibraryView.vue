<template>
  <v-container> 
    <ReturnLoanComponent />
    <h2>Add loan</h2>
    <LibraryLoanComponent />
    <h2>Your loans</h2>
    <LoanListComponent />
    <h2>Search for a book</h2> 
    <TitleListComponent />
  </v-container>
</template>

<script lang='ts'>
import {Vue, Component, Prop} from 'vue-property-decorator';
import LoanListComponent from '@/components/LoanListComponent.vue';
import LibraryLoanComponent from '@/components/LibraryLoanComponent.vue';
import TitleListComponent from '@/components/TitleListComponent.vue';
import ReturnLoanComponent from '@/components/ReturnLoanComponent.vue';
import TitlesModule from '../store/modules/TitlesModule';
import LoansModule from '../store/modules/LoansModule';
import BooksModule from '../store/modules/BooksModule';


@Component({
  components: {
    LoanListComponent,
    LibraryLoanComponent,
    TitleListComponent,
    ReturnLoanComponent
  }
})

export default class LibraryView extends Vue{

  private created(): void {
    LoansModule.fetchAll();
    TitlesModule.fetchAll();
    BooksModule.fetchAll();
  }
}
</script>

<style>

</style>