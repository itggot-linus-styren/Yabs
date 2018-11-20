<template>
    <div class="view">
        <div class="left">
            <h1>Lägg till {{this.type}}</h1>
            <DropDownType @change-type="onChangeType($event)" v-bind:selectedType="this.type"/>
            <LoaningForm v-bind:style="{ display: displayLoan }"/>
            <CigForm v-bind:style="{ display: displayCig }"/>
        </div>

        <div class="right">
        </div>
    </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoaningForm from '@/components/LoaningForm.vue';
import CigForm from '@/components/CigForm.vue';
import DropDownType from '@/components/DropDownType.vue';

@Component({
  components: {
    LoaningForm,
    CigForm,
    DropDownType,
  },
})

export default class Add extends Vue {
    
    type = 'Lån';

    displayLoan = 'block'
    displayCig = 'none'

    onChangeType(type : string) {
        this.type = type;
        if(this.type == 'Lån'){
            this.displayLoan = 'block';
            this.displayCig = 'none';   
        } else {
            this.displayLoan = 'none';
            this.displayCig = 'block';
        }
    }
}
</script>

<style lang="sass" scoped>
    .left
        width: 50%
        height: 100%
        padding: 5%

    .right
        width: 50%
        height: 100%

    
</style>
