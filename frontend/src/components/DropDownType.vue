<template>
    <div @click="changeType">
        <b-dropdown id="ddown1" text="Ändra Typ" class="m-md-2" >
            <b-dropdown-item @click="changeToLoan">Lån</b-dropdown-item>
            <b-dropdown-item @click="changeToCig">ID Kort</b-dropdown-item>
        </b-dropdown>
    </div>
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