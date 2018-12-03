<template lang="pug">
    b-card.card(bg-variant='light')
        b-table(:sort-by.sync='sortBy', :sort-desc.sync='sortDesc', :items='items', :fields='fields')

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ReacentLoan extends Vue {
      public sortBy = 'utgångsdatum';
      public sortDesc = false;
      public fields = [
        { key: 'Låntagare', sortable: false },
        { key: 'Utlånare', sortable: false },
        { key: 'Bok', sortable: false },
        { key: 'Utgångsdatum', sortable: false },
      ];

      public items = [
        {Låntagare: 'Simon Johannesson', Utlånare: 'Daniel Berg', Bok: 'Bibeln', Utgångsdatum: '01-01-2019'},
      ];
    }
</script>

<style lang="sass" scoped>
    .card
        width: 100%
        height: 100%
        overflow-y: auto
</style>
