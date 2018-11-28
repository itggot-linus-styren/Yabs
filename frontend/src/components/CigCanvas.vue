<template lang="pug">
    .root
        #canvas
            //- Put canvas here!

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CigCanvas extends Vue {}
</script>

<style lang="sass" scoped>
    .root
        width: 19vw
        height: 29.64vw
        display: flex !important
        margin-bottom: 1%
        margin-right: 1%
        background-color: red
        justify-self: center
    
    #canvas
        width: 100%
        height: 100%

    @media only screen and (max-width: 808px)
        .root
            width: 38vw
            height: 59.28vw

</style>
