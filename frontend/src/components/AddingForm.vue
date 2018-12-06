<template lang="pug">
   div
    b-form(@submit='onSubmit', @reset='onReset', v-if='show')
        b-card(bg-variant='light')
            b-form-group(vertical='' label-class='text-sm-right' label-for='nestedBid')
                b-form-input#nestedBid(placeholder='Bokens Streckkod' v-model="form.book_id")
            b-form-group(vertical='' label-class='text-sm-right' label-for='nestedBid')
                b-form-input#nestedBid(placeholder='Titel' v-model="form.titel_id")
            b-form-group(vertical='' label-class='text-sm-right' label-for='nestedBid')
                b-form-input#nestedBid(placeholder='Status: tex "ok", "framsida saknas"' v-model="form.status")
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
