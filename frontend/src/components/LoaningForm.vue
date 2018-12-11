<template lang="pug">
   div
    b-form(@submit='onSubmit', v-if='show')
        b-card(bg-variant='light')
            b-form-group(vertical='' label-class='text-sm-right' label-for='nestedUid')
                b-form-input#nestedUid(placeholder='Elevens Streckkod' v-model="form.loaned_by_id")
            b-form-group(vertical='' label-class='text-sm-right' label-for='nestedBid')
                b-form-input#nestedBid(placeholder='Bokens Streckkod' v-model="form.book_id")
            b-form-group(vertical='' label-class='text-sm-right' label-for='nestedDate')
                b-form-input#nestedDate(v-model="form.date" :disabled="disabled" type='date')
                b-form-checkbox(id="checkbox" v-model="checked" value="true" unchecked-value="false") Använd flera gånger
            b-button(type='submit', variant='primary') Låna Ut

</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
 
@Component
export default class LoaningForm extends Vue {
    public checked: string = 'false';
    public disabled: boolean = false;
    public show: boolean = true;
    public form = {
        lent_by_id: '1804583927',
        loaned_by_id: '',
        book_id: '',
        date: '',
    };

    @Watch('checked')
    public setTrueOrFalse() {
        if (this.checked === 'true') {
            this.disabled = true;
        } else {
            this.disabled = false;
        }
    }

    public onSubmit(evt: Event) {
        evt.preventDefault();
        this.$store.dispatch('loans/create', this.form)
            .then((loan: any) => this.$emit('loan-added', loan))
            .catch((failure: any) => console.log(failure));
        // alert(JSON.stringify(this.form));
    }

}
</script>
