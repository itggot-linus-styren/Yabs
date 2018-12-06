<template lang="pug">
    .view
        .left
            b-alert(variant="danger" :show="showDismissibleDangerAlert" dismissible) {{failure}}
            b-alert(variant="success" :show="showDismissibleSuccessAlert" dismissible) Loan added
            .container
                h1 Lägg till {{this.type}}
                DropDownType(@change-type='onChangeType($event)', v-bind:selectedType='this.type')
                LoaningForm(v-bind:style='{ display: displayLoan }' v-on:loan-added="onLoanAdded")
                CigForm(v-bind:style='{ display: displayCig }')
        .right
            RecentLoan(v-bind:style='{ display: displayLoan }')
            CanvasContainer(v-bind:style='{ display: displayCig }')

</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import LoaningForm from '@/components/LoaningForm.vue';
import CigForm from '@/components/CigForm.vue';
import DropDownType from '@/components/DropDownType.vue';
import RecentLoan from '@/components/RecentLoan.vue';
import CanvasContainer from '@/components/CanvasContainer.vue';

@Component({
  components: {
    LoaningForm,
    CigForm,
    DropDownType,
    RecentLoan,
    CanvasContainer,
  },
})

export default class Add extends Vue {
    public type = 'Lån';
    public displayLoan = 'block';
    public displayCig = 'none';
    public showDismissibleDangerAlert = false;
    public showDismissibleSuccessAlert = false;
    public failure: any = '';
    public hasAddedLoan: boolean = false;

    @Watch('$store.state.loans.failure')
    public onFailureChanged(val: any) {
        this.failure = Object.entries(this.$store.state.loans.failure.response.data)
            .map(([k, v]) => {
                // @ts-ignore: v is array
                return k + ' ' + v.join(', ');
            }).join(' and ');
        this.showDismissibleDangerAlert = true;
        this.showDismissibleSuccessAlert = false;
    }
    @Watch('$store.state.loans.loans')
    public onLoansChanged(val: any) {
        if (this.hasAddedLoan) {
            this.hasAddedLoan = false;
            this.showDismissibleSuccessAlert = true;
            this.showDismissibleDangerAlert = false;
        }
    }

    public onLoanAdded(payload: any) {
        this.hasAddedLoan = true;
    }


    public onChangeType(type: string) {
        this.type = type;
        if (this.type === 'Lån') {
            this.displayLoan = 'block';
            this.displayCig = 'none';
        } else {
            this.displayLoan = 'none';
            this.displayCig = 'flex';
        }
    }
}
</script>

<style lang="sass" scoped>
    @media only screen and (max-width: 808px)
        .left
            height: 43%
    
        .right
            height: 57%

</style>
