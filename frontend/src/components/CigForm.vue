<template lang="pug">
    div
        b-card(bg-variant='light')
            //- lable(for="file", name="file") Välj en eller flera billder/zipfiler
            input.input-file(multiple type="file" id="file" name="file" accept="image/*, .zip" @change="onFileSelect")
            
            b-button(@click='submit' variant='primary') Lägg till     

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import JSZip from "jszip";

@Component
export default class CigForm extends Vue {
    public files: Array<string> = [];

    public submit() {
        console.log(this.files);
    }

    public onFileSelect(event: any) {
        let fileList = event.srcElement.files

        for (let i = 0; i < fileList.length; i++) {
            if (fileList[i].type == 'application/zip') {
                this.extractFiles(fileList[i])
            } else {
                this.files.push(URL.createObjectURL(fileList[i]));
            }
        }
    }

    public loadFileData(files: Array<any>, fileIndex: number, fileData: any) {
        let file = new File([fileData], files[fileIndex].name, { type: 'image/jpeg' });
        this.files.push(URL.createObjectURL(file));
    }

    public loadFiles(extZip: any) {
        let files: any = Object.values(extZip.files)
        for (let i = 0; i < files.length; i++) {
            if (files[i].name.includes('__MACOSX/') === false) {
                extZip.files[files[i].name].async('blob')
                    .then((fileData: any) => this.loadFileData(files, i, fileData))
                    .catch((error: any) => {
                        console.log('Error2: ' + error);
                    });
            }
        }
    }

    public extractFiles(zip: any) {

        const newZip = new JSZip();

        newZip.loadAsync(zip)
            .then(this.loadFiles)
            .catch( (error: any) => {
                console.log('Error1: ' + error);
            });
    }

}
</script>

<style lang="sass">
    img
        height: 200px
 
</style>
