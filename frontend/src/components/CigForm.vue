<template lang="pug">
    div
        b-card(bg-variant='light')
            //- b-form-file(accept='image/*, .zip', multiple, v-model='file', ref='fileinput', :state='Boolean(file)', placeholder='Välj en eller flera bilder')
            //- .mt-3 Selected file: {{file && file.name}}
            
            input.input-file(multiple type="file" id="file2" name="file2" accept="image/*, .zip" @change="onFileSelect")
            lable(for="file") Välj en eller flera billder/zipfiler
            b-button(@click='submit' variant='primary') Lägg till
            
            div(v-if="files" v-for="file of files")
                img(:src="file")
        



</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import JSZip from "jszip";

@Component
export default class CigForm extends Vue {
    
    file = null;
    
    files = null;

    submit() {
        console.log(this.file)
        console.log(JSON.parse(JSON.stringify(this.file)))
    }

    onFileSelect(event) {
        let fileList = event.srcElement.files

        this.files = []

        for (let i = 0; i < fileList.length; i++) {
            if (fileList[i].type == "application/zip") {
                this.extractFiles(fileList[i])
            } else {
                this.files.push(URL.createObjectURL(fileList[i]));
            }
        }
    }

    loadFileData(files : Array<any>, fileIndex : number, fileData : any) {
        let file = new File([fileData], files[fileIndex]["name"], { type: "image/jpeg" });
        this.files.push(URL.createObjectURL(file));
    }

    loadFiles(extZip) {
        let files = Object.values(extZip.files)
            
        for (let i = 0; i < files.length; i++) {
            if (files[i]["name"].includes("__MACOSX/") == false) {                
                extZip.files[files[i]["name"]].async("blob")
                    .then((fileData : any) => this.loadFileData(files, i, fileData))
                    .catch((error) => {
                        console.log("error2: " + error)
                    });
            }
        }
    }

    extractFiles(zip) {

        let newZip = new JSZip;

        newZip.loadAsync(zip)
            .then(this.loadFiles)
            .catch(function(err) {
                console.log("error1")
            });
    }

}
</script>

<style lang="sass">
    img
        height: 200px

    .input-file

 
</style>
