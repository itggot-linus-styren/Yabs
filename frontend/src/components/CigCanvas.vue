<template lang="pug">
    div
        #canvasContainer(ref="canvasContainer")
            canvas#canvas(ref='canvas')
            img#barcode(hidden='' ref='barcode')
            img#profile(hidden='' ref='profile' src='@/assets/profil.jpg')
            //- button(@click='downloadCanvas') Download
        vue-bootstrap-typeahead(v-model="name" :data="['Canada', 'USA', 'Mexico']")

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

    public name: string = '';
    public width: number = 0;
    public height: number = 0;
    public size: number = 1;
    public context: any = null;

    @Watch('updated')
    public generateCanvas() {

        if (this.context !== null) {
            this.context.clearRect(0, 0, this.width, this.height);
        }

        this.getCanvasContainerSize();
        this.setCanvasSize();
        this.drawText();
        setTimeout(() => this.drawImages(), 100);

    }

    public getCanvasContainerSize() {
        let canvasContainer: any = this.$refs.canvasContainer;
        this.width = canvasContainer.clientWidth
        this.height = canvasContainer.clientHeight
    }

    public setCanvasSize() {
        let htmlCanvasElement: HTMLCanvasElement | any = this.$refs.canvas;
        this.context = htmlCanvasElement.getContext('2d');

        this.context.canvas.width = this.width;
        this.context.canvas.height = this.height;
    }

    public drawImages() {
        const profileImage = this.$refs.profile;
        const brdcode = this.$refs.barcode;

        const element = this.$refs.barcode;
        JsBarcode(element, '1853563462');

        this.context.drawImage(profileImage, this.width / 4, 0, this.width / 2, this.width / 1.5);
        this.context.drawImage(brdcode, this.width / 4, this.width * 1.15, this.width / 2, this.width / 3);
    }

    @Watch('name')
    public drawText() {
        // this.context.clearRect(0, 0, this.width, this.height);
        const firstFontSize = this.width / 10;
        const secondFontSize = this.width / 20;

        this.context.font = firstFontSize + 'px Arial';
        this.context.textAlign = 'center';
        this.context.fillText(this.name, this.width / 2, this.height / 2, this.width);
        this.context.fillText('Elev', this.width / 2, this.height / 1.7);
        this.context.font = secondFontSize + 'px Arial';
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

    @Watch('name')
    function() {
        this.generateCanvas();
    }

    public mounted() {
        this.generateCanvas();
    }

}
</script>

<style lang="sass" scoped>
    #canvasContainer
        width: 19vw
        height: 29.64vw
        display: flex !important
        margin-bottom: 1%
        margin-right: 1%
        justify-self: center
        border: lightgrey solid

    @media only screen and (max-width: 808px)
        #canvasContainer
            width: 38vw
            height: 59.28vw

</style>
