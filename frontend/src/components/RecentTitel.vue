<template lang="pug">
    b-card.card(bg-variant='light')
        b-table(:sort-by.sync='sortBy', :sort-desc.sync='sortDesc', :items='items', :fields='fields')

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class RecentTitel extends Vue {
      public sortBy = 'Titel';
      public sortDesc = false;
      public fields = [
        { key: 'Titel', sortable: false },
        { key: 'Kostnad', sortable: false },
        { key: 'Typ', sortable: false },
        { key: 'ISBN', sortable: false },
      ];

      public items = [
        {Titel: 'Matte 4c', Kostnad: '300', Typ: 'Kurslitteratur', ISBN: '01-01-2019'},
        {Titel: 'Fysik 2', Kostnad: '299', Typ: 'Kurslitteratur', ISBN: '01-01-2019'},
        {Titel: 'Harry Potter', Kostnad: '129', Typ: 'Bibloteksbok', ISBN: '01-01-2019'},
        {Titel: 'Animal Farm', Kostnad: '99', Typ: 'Skönhetslitteratur', ISBN: '01-01-2019'},
      ];
    }
</script>

<style lang="sass" scoped>
    .card
        width: 100%
        height: 100%
        overflow-y: auto
</style>
