<template lang="pug">
    .view
        .left
            .container
                h1 Lägg till {{this.type}}
                DropDownType(@changeType='onChangeType($event)' v-bind:selectedType='this.type')
                LoaningForm(v-bind:style='{ display: displayLoan }')
                CigForm(@sendUserData='onSendUserData($event)' v-bind:style='{ display: displayCig }')
        .right
            RecentLoan(v-bind:style='{ display: displayLoan }')
            CanvasContainer(v-bind:style='{ display: displayCig }'  v-bind:updated='updated' v-bind:userData='userData')

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
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
    public updated = false;
    public userData = {};

    public onChangeType(type: string) {
        this.type = type;
        this.updated = true;

        if (this.type === 'Lån') {
            this.displayLoan = 'block';
            this.displayCig = 'none';
        } else {
            this.displayLoan = 'none';
            this.displayCig = 'flex';
        }
    }

    public onSendUserData(userData) {
        this.userData = userData
    }

}
</script>

<style lang="sass" scoped>
    .left
        width: 50%
        height: 100%
        padding: 10%
        padding-top: 5%

    .right
        width: 50%
        height: 100%
        padding: 5%
        padding-left: 0px

    @media only screen and (max-width: 808px)
        .right, .left
            width: 100%
            display: flex
            flex-direction: row
            justify-content: center
            padding: 0px

        .left
            height: 43%
    
        .right
            height: 57%

</style>
