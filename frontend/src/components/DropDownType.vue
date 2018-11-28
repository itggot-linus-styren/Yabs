<template lang="pug">
    div(@click='changeType')
        b-dropdown#ddown1.m-md-2(text='Ändra Typ')
            b-dropdown-item(@click='changeToLoan') Lån
            b-dropdown-item(@click='changeToCig') ID Kort

</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DropDownType extends Vue {

    @Prop({default: ''})
    selectedType: string;

    type = this.selectedType;

    changeType () {
        this.$emit('change-type', this.type)
    }

    changeToLoan () {
        this.type = "Lån"
    }

    changeToCig () {
        this.type = "ID Kort"
    }

}
</script>