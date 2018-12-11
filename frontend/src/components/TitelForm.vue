<template lang="pug">
   div
    b-form(@submit='onSubmit', @reset='onReset', v-if='show')
        b-card(bg-variant='light')
            b-form-group(vertical='' label-class='text-sm-right' label-for='nestedBid')
                b-form-input#nestedBid(placeholder='Namn' v-model="form.book_name")
            b-form-group(vertical='' label-class='text-sm-right' label-for='nestedBid')
                b-form-input#nestedBid(placeholder='Kostnad' v-model="form.titel_cost")
            b-form-group(vertical='' label-class='text-sm-right' label-for='nestedBid')
                b-form-input#nestedBid(placeholder='ISBN' v-model="form.isbn")
            b-form-select(:options="options" class="mb-3")
            b-button(type='submit', variant='primary') Lägg till
            b-button(type='reset', variant='danger') Rensa Fältet

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LoaningForm extends Vue {

    public form = {
        lent_by_id: '1804583927',
        loaned_by_id: '',
        book_id: '',
    };
    public show = true;

    public options =  [
        { value: null, text: 'Välj typ av Titel' },
        { value: 'Kurslitteratur', text: 'Kurslitteratur' },
        { value: 'Bibloteksbok', text: 'Bibloteksbok' },
        { value: 'Skönlitteratur', text: 'Skönlitteratur' },
      ];

    public onSubmit(evt: Event) {
        evt.preventDefault();
        console.log(this.$store.dispatch('loans/create', this.form));
        // alert(JSON.stringify(this.form));
    }

    public onReset(evt: Event) {
        evt.preventDefault();
        this.form.loaned_by_id = '';
        this.form.book_id = '';
        this.show = false;
        this.$nextTick(() => { this.show = true; });
    }
}
</script>
