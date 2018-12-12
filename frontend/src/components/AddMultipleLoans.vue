<template lang="pug">
    div
        b-btn(v-b-modal.modal1) Låna ut flera böcker

        b-modal#modal1(:title="pageTitles[pageIndex]" size="lg" centered )
            b-form(v-if='pageIndex == 0')
                b-form-group(label="Använder du skannare?")
                    b-form-radio-group(v-model="scannerSelected" :options="scannerOptions" name="radioInline")
                    br(v-if="scannerSelected == 'false'")
                    b-alert.float-left(v-if="scannerSelected == 'false'" show=true variant="warning" size='sm') Det är stark rekomenderat att använda skannare
                b-form-group(vertical='' label="När ska böckerna lämmnas in?")
                    b-form-input#nestedDate(v-model="date" type='date')
                b-form-group(vertical='' label="Hur många böcker ska lämnas ut?")
                    b-form-input#nestedDate(v-model="amountOfPupils" type='number')

            b-form.secondForm(v-if='pageIndex == 1')
                b-form-group(v-for="(loan, index) in loans" :key="loan" label="loan")
                    b-form-input#nestedDate(v-model="bID" type='number')
                    b-form-input#nestedDate(v-model="uID" type='number')

            div.w-100(slot="modal-footer")
                b-btn.float-left(size="sm" variant="secondary" @click="previousPage") Bakåt
                b-btn.float-left(size="sm" variant="primary" @click="nextPage") Nästa
                b-btn.float-right(size="sm" variant="danger" @click="show=false") Avbryt
</template>

<script lang="ts">
import { Component, Watch, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AddMultipleLoans extends Vue {

public loans: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

public pageIndex: number = 0;
public pageTitles: string[] = [
    'Förinställningar',
    'Lån',
];
public scannerOptions = [
    { text: 'Ja', value: 'true' },
    { text: 'Nej', value: 'false' },
];
public scannerSelected = 'true';

public date: string = '';
public amountOfPupils: number = 0;

public nextPage() { if (this.pageTitles.length - 1 !== this.pageIndex) {this.pageIndex++; } }
public previousPage() { if (0 !== this.pageIndex) {this.pageIndex--; } }


}
</script>


<style lang="sass" scoped>
    .secondForm

</style>

