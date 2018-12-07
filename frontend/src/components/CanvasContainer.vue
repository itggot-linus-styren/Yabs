<template lang="pug">
    .card
        .grid-container
            CigCanvas.canvas(v-for="image in images" v-bind:updated='updated' v-bind:userData="userData" v-bind:image="image")
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import CigCanvas from '@/components/CigCanvas.vue';

@Component({
    components: {
        CigCanvas,
    },
})
export default class CanvasContainer extends Vue {

    @Prop({default: false}) public updated!: boolean;
    @Prop({default: {}}) public userData!: object;
    @Prop({default: []}) public images!: string[];

    public container: number = 10;

}
</script>

<style lang="sass" scoped>
    .card
        width: 100%
        height: 100%
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
        
    .grid-container
        margin-top: 10px
        margin-bottom: 10px
        width: 90%
        height: auto
        display: inline-grid
        grid-template-columns: 50% 50%
        grid-template-rows: auto
        grid-column-gap: 10px
        grid-row-gap: 10px

    .canvas
        place-self: center
        
</style>

