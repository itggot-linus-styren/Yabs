<template lang="pug">
    .view
        .left
            .container
                h1 Lägg till {{this.type}}
                DropDownType(@change-type='onChangeType($event)', v-bind:selectedType='this.type')
                LoaningForm(v-bind:style='{ display: displayLoan }')
                CigForm(v-bind:style='{ display: displayCig }')
        .right
            ReacentLoan(v-bind:style='{ display: displayLoan }')
            CanvasContainer(v-bind:style='{ display: displayCig }')

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoaningForm from '@/components/LoaningForm.vue';
import CigForm from '@/components/CigForm.vue';
import DropDownType from '@/components/DropDownType.vue';
import ReacentLoan from '@/components/ReacentLoan.vue';
import CanvasContainer from '@/components/CanvasContainer.vue';

@Component({
  components: {
    LoaningForm,
    CigForm,
    DropDownType,
    ReacentLoan,
    CanvasContainer,
  },
})

export default class Add extends Vue {
    public type = 'Lån';
    public displayLoan = 'block';
    public displayCig = 'none';

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
