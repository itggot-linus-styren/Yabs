<template>
  <ListComponent
    :headers="headers"
    :items="loansModule.allAsArray"
    class="elevation-1"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LoansModule from '../store/modules/LoansModule';
import { VuexModule } from 'vuex-module-decorators';
import ListComponent from '@/components/ListComponent.vue';

@Component({
  components: {
    ListComponent
  }
})
export default class LoanListComponent extends Vue {
  private loansModule: VuexModule = LoansModule;
  private headers: object[] = [
    { text: 'Lånad av', key: 'loaned_by.name' },
    { text: 'Utlånad av', key: 'lent_by.name' },
    { text: 'Boktitel', key: 'book.title.name' },
    { text: 'Utgångsdatum', key: 'expiration_date' },
  ];
}
</script>

<style lang="sass" scoped>
    .card
        width: 100%
        height: 100%
        overflow-y: auto
</style>
