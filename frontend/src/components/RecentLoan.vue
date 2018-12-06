<template lang="pug">
    b-card.card(bg-variant='light')
        b-table(:sort-by.sync='sortBy', :sort-desc.sync='sortDesc', :items='items', :fields='fields')

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter } from '../decorators';

@Component
export default class RecentLoan extends Vue {
      @Getter('loans/all') loans : any;
      public sortBy = 'Utgångsdatum';
      public sortDesc = false;
      public fields = [
        { key: 'loaned_by.name', sortable: false },
        { key: 'lent_by.name', sortable: false },
        { key: 'book.title.name', sortable: false },
       // { key: 'Utgångsdatum', sortable: false },
      ];

      get items() {
        return Object.entries(this.loans).map(([k, v]) => Object.assign(v, {'.key': k}));
      }

      public created() {
        this.$store.dispatch('loans/all');
      }
    }
</script>

<style lang="sass" scoped>
    .card
        width: 100%
        height: 100%
        overflow-y: auto
</style>
