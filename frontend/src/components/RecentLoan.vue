<template lang="pug">
    b-card.card(bg-variant='light')
        b-table(:sort-by.sync='sortBy', :sort-desc.sync='sortDesc', :items='items', :fields='fields')

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class RecentLoan extends Vue {
      public sortBy = 'Utgångsdatum';
      public sortDesc = false;
      public fields = [
        { key: 'Låntagare', sortable: false },
        { key: 'Utlånare', sortable: false },
        { key: 'Bok', sortable: false },
        { key: 'Utgångsdatum', sortable: false },
      ];

      public items = [
        {Låntagare: 'Simon Johannesson', Utlånare: 'Daniel Berg', Bok: 'Bibeln', Utgångsdatum: '01-01-2019'},
        {Låntagare: 'Simon Johannesson', Utlånare: 'Daniel Berg', Bok: 'Bibeln', Utgångsdatum: '01-01-2019'},
        {Låntagare: 'Simon Johannesson', Utlånare: 'Daniel Berg', Bok: 'Bibeln', Utgångsdatum: '01-01-2019'},
        {Låntagare: 'Simon Johannesson', Utlånare: 'Daniel Berg', Bok: 'Bibeln', Utgångsdatum: '01-01-2019'},
        {Låntagare: 'Simon Johannesson', Utlånare: 'Daniel Berg', Bok: 'Bibeln', Utgångsdatum: '01-01-2019'},
        {Låntagare: 'Simon Johannesson', Utlånare: 'Daniel Berg', Bok: 'Bibeln', Utgångsdatum: '01-01-2019'},
        {Låntagare: 'Simon Johannesson', Utlånare: 'Daniel Berg', Bok: 'Bibeln', Utgångsdatum: '01-01-2019'},
        {Låntagare: 'Simon Johannesson', Utlånare: 'Daniel Berg', Bok: 'Bibeln', Utgångsdatum: '01-01-2019'},
        {Låntagare: 'Simon Johannesson', Utlånare: 'Daniel Berg', Bok: 'Bibeln', Utgångsdatum: '01-01-2019'},
        {Låntagare: 'Simon Johannesson', Utlånare: 'Daniel Berg', Bok: 'Bibeln', Utgångsdatum: '01-01-2019'},
        {Låntagare: 'Simon Johannesson', Utlånare: 'Daniel Berg', Bok: 'Bibeln', Utgångsdatum: '01-01-2019'},
        {Låntagare: 'Simon Johannesson', Utlånare: 'Daniel Berg', Bok: 'Bibeln', Utgångsdatum: '01-01-2019'},
        {Låntagare: 'Simon Johannesson', Utlånare: 'Daniel Berg', Bok: 'Bibeln', Utgångsdatum: '01-01-2019'},
        {Låntagare: 'Simon Johannesson', Utlånare: 'Daniel Berg', Bok: 'Bibeln', Utgångsdatum: '01-01-2019'},
        {Låntagare: 'Simon Johannesson', Utlånare: 'Daniel Berg', Bok: 'Bibeln', Utgångsdatum: '01-01-2019'},
        {Låntagare: 'Simon Johannesson', Utlånare: 'Daniel Berg', Bok: 'Bibeln', Utgångsdatum: '01-01-2019'},
        {Låntagare: 'Simon Johannesson', Utlånare: 'Daniel Berg', Bok: 'Bibeln', Utgångsdatum: '01-01-2019'},
        {Låntagare: 'Simon Johannesson', Utlånare: 'Daniel Berg', Bok: 'Bibeln', Utgångsdatum: '01-01-2019'},
        {Låntagare: 'Simon Johannesson', Utlånare: 'Daniel Berg', Bok: 'Bibeln', Utgångsdatum: '01-01-2019'},
      ];
    }
</script>

<style lang="sass" scoped>
    .card
        width: auto
        height: auto
        overflow-y: auto
</style>
