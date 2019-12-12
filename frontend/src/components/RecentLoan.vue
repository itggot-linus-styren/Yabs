<template>
    <b-table
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :items="items"
      :fields="fields"
    />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LoansModule from '../store/modules/LoansModule';

@Component
export default class RecentLoan extends Vue {
  public sortBy: string = 'Utgångsdatum';
  public sortDesc: boolean = false;
  public fields: object[] = [
    { key: 'loaned_by.name', sortable: false, label: 'Lånad av' },
    { key: 'lent_by.name', sortable: false, label: 'Utlånad av' },
    { key: 'book.title.name', sortable: false, label: 'Boktitel' },
    { key: 'expiration_date', sortable: false, label: 'Utgångsdatum' },
  ];

  get items() {
    return Object.entries(LoansModule.all)
      .filter(([key, value]) => {
        // @ts-ignore: returned at
        return !value.returned_at;
      })
      .map(([key, value]) => Object.assign(value, { '.key': key }));
  }

  public created() {
    LoansModule.fetchAll()
      .then(() => this.$emit('loans-loaded', LoansModule.all))
      .catch((failure: any) => console.log(failure));
  }
}
</script>

<style lang="sass" scoped>
    .card
        overflow-y: auto
</style>
