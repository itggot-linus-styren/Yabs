<template lang="pug">
    div
        b-table(show-empty='', stacked='md', :items='items', :fields='fields', :current-page='currentPage', :per-page='perPage', :filter='filter', :sort-by.sync='sortBy', :sort-desc.sync='sortDesc', :sort-direction='sortDirection', @filtered='onFiltered')
            template(slot='name', slot-scope='row') {{row.value.first}} {{row.value.last}}
            template(slot='isActive', slot-scope='row') {{row.value?'Yes :)':'No :('}}
            template(slot='actions', slot-scope='row')
                // We use @click.stop here to prevent a 'row-clicked' event from also happening
                b-button.mr-1(size='sm', @click.stop='info(row.item, row.index, $event.target)')
                    | Info modal
                b-button(size='sm', @click.stop='row.toggleDetails')
                    | {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
            template(slot='row-details', slot-scope='row')
                b-card
                    ul
                        li(v-for='(value, key) in row.item', :key='key') {{ key }}: {{ value}}
        b-row
            b-col.my-1(md='6')
                b-pagination.my-0(:total-rows='totalRows', :per-page='perPage', v-model='currentPage')
        // Info modal
        b-modal#modalInfo(@hide='resetModal', :title='modalInfo.title', ok-only='')
            pre.
                \n{{ modalInfo.content }}        
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MainTable extends Vue {
    @Prop({default: 5}) public perPage!: number;
    @Prop({default: 0}) public pageOptions!: number;
    @Prop({default: null}) public sortBy!: any;
    @Prop({default: true}) public sortDesc!: boolean;
    @Prop({default: 'desc'}) public sortDirection!: string;
    @Prop({default: null}) public filter!: any;
    @Prop({default: null}) public modalInfo!: any;


public currentPage = 1;
 public items = [ // Mockup
            {elevnamn: 'Josephi krakowski', lån: 'Flex Tape Manual',
            lärarnamn: 'Phil Swift', utgångsdatum: '01-01-2019'},
            {elevnamn: 'Eric Persson', lån: 'Lord of the flies',
            lärarnamn: 'David Lundholm', utgångsdatum: '01-01-2019'},
            {elevnamn: 'Filip Gustavsson', lån: 'The hitchhiker\'s guide to the galaxy',
            lärarnamn: 'Fredrik Kronhamn', utgångsdatum: '01-01-2019'},
            {elevnamn: 'Alex henryz', lån: 'Moby Dick',
            lärarnamn: 'Daniel Berg', utgångsdatum: '01-01-2019'},
            {elevnamn: 'Linus Styrén' , lån: 'Harry Potter 3',
            lärarnamn: 'David Lundholm', utgångsdatum: '01-01-2019'}];

    public fields = [
        { key: 'elevnamn', label: 'Utlånad till', sortable: true, class: 'text-left' },
        { key: 'lärarnamn', label: 'Utlånad av', class: 'text-left'},
        { key: 'lån', label: 'Material', sortable: true, class: 'text-left'},
        { key: 'utgångsdatum', label: 'Utgångsdatum', sortable: true, class: 'text-left'},
    ];





    public totalRows = this.items.length;


    get sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f: any) => f.sortable)
        .map((f: any) => Object({ text: f.label,
                    value: f.key }) );
    }

    public info(item: any, index: number, button: any) {
      this.modalInfo.title = `Row index: ${index}`;
      this.modalInfo.content = JSON.stringify(item, null, 2);
      this.$root.$emit('bv::show::modal', 'modalInfo', button);
    }

    public resetModal() {
      this.modalInfo.title = '';
      this.modalInfo.content = '';
    }

    public onFiltered(filteredItems: any) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }














}
</script>