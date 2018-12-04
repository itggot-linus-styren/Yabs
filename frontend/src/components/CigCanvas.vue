<template lang="pug">
    .root
        #canvasContainer()
            canvas#canvas(ref='canvas')
            img#barcode(hidden='' ref='barcode')
            //- button(@click='downloadCanvas') Download
            img#profile(hidden='' ref='profile' src='@/assets/profil.jpg')


</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import JsBarcode from 'jsbarcode';
import JSZip from 'jszip';
import JQuery from 'jquery';
import FileSaver from 'file-saver';
import { setTimeout } from 'timers';

@Component
export default class CigCanvas extends Vue {

    @Prop({default: false}) public updated!: boolean;

    canvasWidth: number = 0;

    public canvas() {
        const size = 1;
        const x: HTMLCanvasElement | any  = this.$refs.canvas;
        const ctx = x.getContext('2d');
        const width = x.width;
        const height = x.height;
        const img = this.$refs.profile;
        // console.log(width)
        // console.log(height)
        ctx.drawImage(img, width/2, 0, width/1.5, height/2);
        ctx.font = '15px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Namn Namnsson', width/2, 100);
        ctx.fillText('Elev', width/2, 200 * size);
        ctx.font = '10px Arial';
        ctx.fillText('namn.namnsson@elev.ga.ntig.se', width/2, 240 * size);
        const element = this.$refs.barcode;
        JsBarcode(element, '1853563462');

        setTimeout(() => {
            const brdcode = this.$refs.barcode;
            ctx.drawImage(brdcode, 25 * size, 250 * size, 150 * size, 50 * size);
        }, 100);
    }

    public downloadCanvas() {
        const zip = new JSZip();
        const canvas: HTMLCanvasElement | any = this.$refs.canvas;
        canvas.toBlob(function(blob: any) {
        zip.file('name.png', blob);
        zip.generateAsync({type: 'blob'}).then(function(blob) {
            // window.location = "data:application/zip;base64," + base64;
            FileSaver.saveAs(blob, 'cards.zip');
        });
        });

    }

    @Watch('updated')
    public getCanvasWidth() {
        console.log("IM IN CANVAS")
        this.canvasWidth = document.getElementById("canvasContainer").offsetWidth
        console.log(this.canvasWidth)
    }

    mounted() {

 
        // this.$nextTick(function () {
        //     this.getCanvasWidth()
        // })
        // this.getCanvasWidth();

        setTimeout(this.canvas, 100);
    }
}
</script>

<style lang="sass" scoped>
    .root
        width: 19vw
        height: 29.64vw
        display: flex !important
        margin-bottom: 1%
        margin-right: 1%
        justify-self: center
    
    #canvasContainer, #canvas
        width: inherit
        height: inherit

    @media only screen and (max-width: 808px)
        .root
            width: 38vw
            height: 59.28vw

</style>
