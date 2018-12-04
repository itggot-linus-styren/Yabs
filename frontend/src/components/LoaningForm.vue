<template lang="pug">
   div
    b-form(@submit='onSubmit', @reset='onReset', v-if='show')
        b-card(bg-variant='light')
            b-form-group(vertical='' label-class='text-sm-right' label-for='nestedUid')
                b-form-input#nestedUid(placeholder='Elevens Streckkod' v-model="form.loaned_by_id")
            b-form-group(vertical='' label-class='text-sm-right' label-for='nestedBid')
                b-form-input#nestedBid(placeholder='Bokens Streckkod' v-model="form.book_id")
            b-button(type='submit', variant='primary') Låna Ut
            b-button(type='reset', variant='danger') Rensa Fälten

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
        console.log(this.$store.dispatch('loans/create', {
            lent_by_id: '1804583927',
            loaned_by_id: '1854282603',
            book_id: '1',
        }));
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
