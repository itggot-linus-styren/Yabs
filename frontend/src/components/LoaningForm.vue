<template lang="pug">
   div
    b-form(@submit='onSubmit', @reset='onReset', v-if='show')
        b-card(bg-variant='light')
            b-form-group(vertical='', label-class='text-sm-right', label-for='nestedUid')
                b-form-input#nestedUid(placeholder='Elevens Streckkod')
            b-form-group(vertical='', label-class='text-sm-right', label-for='nestedBid')
                b-form-input#nestedBid(placeholder='Bokens Streckkod')
            b-button(type='submit', variant='primary') Låna Ut
            b-button(type='reset', variant='danger') Rensa Fälten

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LoaningForm extends Vue {
    public form = {
        uId: '',
        bId: '',
    };
    public show = true;

    public onSubmit(evt: Event) {
        evt.preventDefault();
        alert(JSON.stringify(this.form))
    }

    public onReset(evt: Event) {
        evt.preventDefault();
        this.form.uId = '';
        this.form.bId = '';
        this.show = false;
        this.$nextTick(() => { this.show = true; });
    }
}
</script>
