<template lang="pug">
    b-card.card(bg-variant='light')
        b-table(:sort-by.sync='sortBy', :sort-desc.sync='sortDesc', :items='items', :fields='fields')

</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ReacentLoan extends Vue {
      sortBy = 'utgångsdatum';
      sortDesc = false;
      fields = [
        { key: 'elevnamn', sortable: false },
        { key: 'lärarnamn', sortable: false },
        { key: 'utgångdatum', sortable: false },
      ];

      items = [
        {elevnamn: 'Simon Johannesson', lärarnamn: 'Daniel Berg', utgångsdatum: '01-01-2019'},
        {elevnamn: 'Simon Johannesson', lärarnamn: 'Daniel Berg', utgångsdatum: '01-01-2019'},
        {elevnamn: 'Simon Johannesson', lärarnamn: 'Daniel Berg', utgångsdatum: '01-01-2019'},
        {elevnamn: 'Simon Johannesson', lärarnamn: 'Daniel Berg', utgångsdatum: '01-01-2019'},
        {elevnamn: 'Simon Johannesson', lärarnamn: 'Daniel Berg', utgångsdatum: '01-01-2019'},
        {elevnamn: 'Simon Johannesson', lärarnamn: 'Daniel Berg', utgångsdatum: '01-01-2019'},
        {elevnamn: 'Simon Johannesson', lärarnamn: 'Daniel Berg', utgångsdatum: '01-01-2019'},
        {elevnamn: 'Simon Johannesson', lärarnamn: 'Daniel Berg', utgångsdatum: '01-01-2019'},
        {elevnamn: 'Simon Johannesson', lärarnamn: 'Daniel Berg', utgångsdatum: '01-01-2019'},
        {elevnamn: 'Simon Johannesson', lärarnamn: 'Daniel Berg', utgångsdatum: '01-01-2019'},
        {elevnamn: 'Simon Johannesson', lärarnamn: 'Daniel Berg', utgångsdatum: '01-01-2019'},
        {elevnamn: 'Simon Johannesson', lärarnamn: 'Daniel Berg', utgångsdatum: '01-01-2019'},
        {elevnamn: 'Simon Johannesson', lärarnamn: 'Daniel Berg', utgångsdatum: '01-01-2019'},
        {elevnamn: 'Simon Johannesson', lärarnamn: 'Daniel Berg', utgångsdatum: '01-01-2019'},
        {elevnamn: 'Simon Johannesson', lärarnamn: 'Daniel Berg', utgångsdatum: '01-01-2019'},
        {elevnamn: 'Simon Johannesson', lärarnamn: 'Daniel Berg', utgångsdatum: '01-01-2019'},
        {elevnamn: 'Simon Johannesson', lärarnamn: 'Daniel Berg', utgångsdatum: '01-01-2019'},
        {elevnamn: 'Simon Johannesson', lärarnamn: 'Daniel Berg', utgångsdatum: '01-01-2019'},
        {elevnamn: 'Simon Johannesson', lärarnamn: 'Daniel Berg', utgångsdatum: '01-01-2019'},
        {elevnamn: 'Simon Johannesson', lärarnamn: 'Daniel Berg', utgångsdatum: '01-01-2019'},
        {elevnamn: 'Simon Johannesson', lärarnamn: 'Daniel Berg', utgångsdatum: '01-01-2019'},
        {elevnamn: 'Simon Johannesson', lärarnamn: 'Daniel Berg', utgångsdatum: '01-01-2019'},
      ];
    }
</script>

<style lang="sass" scoped>
    .card
        width: 100%
        height: 100%
        overflow-y: auto
</style>
