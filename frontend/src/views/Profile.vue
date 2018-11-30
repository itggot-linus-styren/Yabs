<template lang="pug">
    .view
        .left
            h1 Simon
            h1 Joahnnesson
            h1 Elev - TE4
            CigCanvas
                // antingen bild eller kortet i canvas
        .right
            h1 hej
            .card
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CigCanvas from '@/components/CigCanvas.vue';

@Component({
    components:{
        CigCanvas
    },
})
export default class App extends Vue {
    
}
</script>

<style lang="sass" scoped>
    .card
        width: 100%
        height: 95%
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
</style>
