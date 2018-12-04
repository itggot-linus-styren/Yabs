<template lang="pug">
    .root
        #canvasContainer
            canvas#canvas(ref='canvas')
            img#barcode(hidden='' ref='barcode')
            img#profile(hidden='' ref='profile' src='@/assets/profil.jpg')
            //- button(@click='downloadCanvas') Download

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

    public width: number = 0;
    public height: number = 0;
    public size: number = 1;
    public context: any = null;

    @Watch('updated')
    public generateCanvas() {

        this.getCanvasContainerSize();
        this.setCanvasSize();
        this.drawText();
        setTimeout(() => this.drawImages(), 100);

    }

    public getCanvasContainerSize() {
        this.width = document.getElementById('canvasContainer').offsetWidth;
        this.height = this.width * 1.56;
    }

    public setCanvasSize() {
        const htmlCanvasElement: HTMLCanvasElement | any = this.$refs.canvas;
        this.context = htmlCanvasElement.getContext('2d');

        this.context.canvas.width = this.width;
        this.context.canvas.height = this.height;
    }

    public drawImages() {
        // let profileImage = new Image;
        // profileImage.src = '@/assets/profil.jpg';
        const profileImage = this.$refs.profile;
        const brdcode = this.$refs.barcode;

        const element = this.$refs.barcode;
        JsBarcode(element, '1853563462');

        this.context.drawImage(profileImage, this.width / 4, 0, this.width / 2, this.width / 1.5);
        this.context.drawImage(brdcode, this.width / 4, this.width * 1.1, this.width / 2, this.width / 4);
    }

    public drawText() {
        this.context.font = '15px Arial';
        this.context.textAlign = 'center';
        this.context.fillText('Namn Namnsson', this.width / 2, this.height / 2);
        this.context.fillText('Elev', this.width / 2, this.height / 1.7);
        this.context.font = '10px Arial';
        this.context.fillText('namn.namnsson@elev.ga.ntig.se', this.width / 2, this.height / 1.5);
    }

    public downloadCanvas() {
        const zip = new JSZip();
        const canvas: HTMLCanvasElement | any = this.$refs.canvas;
        canvas.toBlob((blob: any) => {
        zip.file('name.png', blob);
        zip.generateAsync({type: 'blob'}).then((blob) => {
            // window.location = "data:application/zip;base64," + base64;
            FileSaver.saveAs(blob, 'cards.zip');
        });
    });

    }

    public mounted() {
        this.generateCanvas();
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
        border: lightgrey solid
    
    #canvasContainer
        width: inherit
        height: inherit

    @media only screen and (max-width: 808px)
        .root
            width: 38vw
            height: 59.28vw

</style>
