<template lang="pug">
    .view
        .left
            .container
                h1 Lägg till {{this.type}}
                DropDownType(@change-type='onChangeType($event)', v-bind:selectedType='this.type')
                LoaningForm(v-bind:style='{ display: displayLoan }')
                CigForm(v-bind:style='{ display: displayCig }')
                AddingForm(v-bind:style='{ display: displayAdd }')
                TitelForm(v-bind:style='{ display: displayTitel }')
        .right
            RecentLoan(v-bind:style='{ display: displayLoan }')
            CanvasContainer(v-bind:style='{ display: displayCig }')
            RecentLoan(v-bind:style='{ display: displayAdd }')
            RecentTitel(v-bind:style='{ display: displayTitel }')

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoaningForm from '@/components/LoaningForm.vue';
import CigForm from '@/components/CigForm.vue';
import AddingForm from '@/components/AddingForm.vue';
import DropDownType from '@/components/DropDownType.vue';
import RecentLoan from '@/components/RecentLoan.vue';
import RecentTitel from '@/components/RecentTitel.vue';
import CanvasContainer from '@/components/CanvasContainer.vue';
import TitelForm from '@/components/TitelForm.vue';

@Component({
  components: {
    LoaningForm,
    CigForm,
    AddingForm,
    TitelForm,
    DropDownType,
    RecentLoan,
    RecentTitel,
    CanvasContainer,
  },
})

export default class Add extends Vue {
    public type = 'Lån';
    public displayLoan = 'block';
    public displayCig = 'none';
    public displayAdd = 'none';
    public displayTitel = 'none';

    public onChangeType(type: string) {
        this.type = type;
        if (this.type === 'Lån') {
            this.displayLoan = 'block';
            this.displayCig = 'none';
            this.displayAdd = 'none';
            this.displayTitel = 'none';
        } else if (this.type === 'ID Kort') {
            this.displayLoan = 'none';
            this.displayCig = 'flex';
            this.displayAdd = 'none';
            this.displayTitel = 'none';
        } else if (this.type === 'Bok') {
            this.displayLoan = 'none';
            this.displayCig = 'none';
            this.displayAdd = 'block';
            this.displayTitel = 'none';
        } else {
            this.displayLoan = 'none';
            this.displayCig = 'none';
            this.displayAdd = 'none';
            this.displayTitel = 'block';
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

