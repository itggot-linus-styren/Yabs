<template lang="pug">
    .view
        .left
            h1 Simon
            h1 Joahnnesson
            h1 Elev - TE4
            CigCanvas
                // antingen bild eller kortet i canvas
        .right
            .header
                AddLoan
                .loanText
                    h1 Lån
            .myCard
                ReacentLoan
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CigCanvas from '@/components/CigCanvas.vue';
import AddLoan from '@/components/AddLoan.vue';
import ReacentLoan from '@/components/ReacentLoan.vue';

@Component({
    components: {
        CigCanvas,
        AddLoan,
        ReacentLoan,
    },
})
export default class App extends Vue {}
</script>

<style lang="sass" scoped>
    .myCard
        width: 100%
        height: 90%
        overflow-y: auto
        position: relative
        min-width: 0
        background-color: #fff
        background-clip: border-box
        border: 1px solid rgba(0, 0, 0, 0.125)
        border-radius: 0.25rem
        display: flex
        flex-direction: row
        justify-content: center

    .header
        display: flex
        flex-direction: row
        justify-content: flex-end
        margin-bottom: 10px

    .header h1
        margin: 0

    .loanText
        height: inherit
        width: auto
        display: flex
        flex-direction: column
        justify-content: center
        margin-left: 5%
        margin-right: 5%

    .right
        padding-top: 2%
</style>
