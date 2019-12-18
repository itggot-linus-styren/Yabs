<template>
  <div>
    <div
      id="canvasContainer"
      ref="canvasContainer"
    >
      <canvas
        id="canvas"
        ref="canvas"
      />
    </div>
    <v-form>
      <v-item-group>
        <v-autocomplete
          v-model="name"
          :data="userNames"
        />
        <v-btn @click="savePicture">
          Spara Bild
        </v-btn>
        <v-btn @click="downloadCanvas">
          Ladda ned kort
        </v-btn>
      </v-item-group>
    </v-form>
    <img
      ref="bg"
      src="../assets/background.png"
      hidden="hidden"
    >
    <img
      ref="logo"
      src="../assets/logo.png"
      hidden="hidden"
    >
  </div>
</template>

<!-- 
  There are some uncommon imports in this file such as resize and JsBarcode. Resize is used
  to manipulate pixel width on images, Jsbarcode is a dependency
  used for interpreting the barcode information on the 
  cards
--> 

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import JsBarcode from 'jsbarcode';
import JSZip from 'jszip';
import JQuery from 'jquery';
import FileSaver from 'file-saver';
import resize from 'vue-resize-directive';
import { setTimeout } from 'timers';
import UsersModule from '../store/modules/UsersModule';

@Component({
  directives: {
    resize,
  },
})
export default class CigCanvas extends Vue {
  @Prop({ default: null }) public image!: File | null;
  @Prop({ default: false }) public sendCanvas!: boolean;

  public name: string = '';
  public barcode: string = '';
  public role: string = '';
  public email: string = '';
  public width: number = 0;
  public height: number = 0;
  public size: number = 1;
  public context: any = null;

  
  // Method userNames is used in order to filter out the users that are not deleted to verify
  // that the user that you are trying to render on the card is an actual active user
  

  public get userNames() {
    return Object.entries(UsersModule.all)
      .filter(([key, user]) => !user.name.includes('Deleted User'))
      .map(([key, user]) => user.name);
  }

  // checkUserData is used to fill the instances of the class with information from the 
  // UsersModule so that the card has the right inforamtion

  public checkUserData() { // TODO: don't compare name to find the user. Instead compare the uid.
    for (const user in UsersModule.all) {
      if (this.name === UsersModule.all[user].name) {
        this.barcode = user;
        this.email = UsersModule.all[user].email;
        this.role = UsersModule.all[user].role;
      }
    }
  }

  
  // The generate Canvas does exactly what its called and uses the resize dependency 
  // to cut the canvas into a good format


  public generateCanvas() {
    this.getCanvasContainerSize();
    this.setCanvasSize();
    if (this.context !== null) {
      this.context.clearRect(0, 0, this.width, this.height);

      setTimeout(() => {
        const bg: any = this.$refs.bg;
        this.context.drawImage(bg, 0, 0, this.width, this.height);

        const logo: any = this.$refs.logo;
        this.context.drawImage(logo, this.width / 2 - 75, 25);
        this.drawText();
        this.drawImages();
      }, 200);
    }
  }

  
  // Sets the instance of the height and width to the client hight and width to standardise 
  // the structure of the canvas
  

  public getCanvasContainerSize() {
    const canvasContainer: any = this.$refs.canvasContainer;
    this.width = canvasContainer.clientWidth;
    this.height = canvasContainer.clientHeight;
  }

  
  // Set canvas size basically does the same thing but sets the dimensions to 2d 


  public setCanvasSize() {
    const htmlCanvasElement: HTMLCanvasElement | any = this.$refs.canvas;
    this.context = htmlCanvasElement.getContext('2d');

    htmlCanvasElement.width = this.width;
    htmlCanvasElement.height = this.height;
  }

  /* 
  The drawImages method instantiates new classes of the image based on the barcode and also 
  on the extracted zip file that is the profile image
  */ 

  public drawImages() {
    const barcode = new Image();
    const profileImage = new Image();

    if (this.image != null) {
      profileImage.src = URL.createObjectURL(this.image);
    }

    if (this.barcode !== '') {
      JsBarcode(barcode, this.barcode);
    }

    setTimeout(() => {
      this.context.save();
      this.context.beginPath();
      this.context.arc(
        this.width / 4 + this.width / 4,
        this.height / 4 + this.width / 4,
        this.width / 4,
        0,
        Math.PI * 2,
        true,
      );
      this.context.closePath();
      this.context.clip();

      this.context.drawImage(
        profileImage,
        this.width / 4,
        this.height / 4,
        this.width / 2,
        this.width / 1.5,
      );

      this.context.beginPath();
      this.context.arc(
        this.width / 4,
        this.height / 4,
        this.width / 2,
        0,
        Math.PI * 2,
        true,
      );
      this.context.clip();
      this.context.closePath();
      this.context.restore();

      this.context.drawImage(
        barcode,
        this.width / 4,
        this.width * 1.15,
        this.width / 2,
        this.width / 3,
      );
    }, 200);
  }

  /* 
  The drawText method renders the text on the canvas in order to style it and also get
  good fonts and such
  */ 

  public drawText() {
    const firstFontSize = this.width / 10;
    const secondFontSize = this.width / 20;

    this.context.font = firstFontSize + 'px Arial';
    this.context.textAlign = 'center';
    this.context.fillStyle = '#ffffff';
    this.context.fillText(
      this.name,
      this.width / 2,
      this.height / 2 + this.height / 8,
      this.width,
    );
    this.context.fillText(
      this.role,
      this.width / 2,
      this.height / 1.7 + this.height / 8,
      this.width,
    );
  }

  /* 
  This is a watch action that monitors the send the instance sendCanvas to see if the 
  boolean is being mutated in any way and also blobs the image to send it via the 
  emit method built in Vue to the parent component
  */


  @Watch('sendCanvas')
  public sendThisCanvas() {
    const zip = new JSZip();
    const canvas: HTMLCanvasElement | any = this.$refs.canvas;
    canvas.toBlob((blob: any) => {
      this.$emit('imageSent', blob);
    });
  }

  // The downloadCanvas method is used to download and also save the donwloaded zip to
  // the new instance of a JSZIP to later blob it so that it can be used in Vue

  public downloadCanvas() {
    const zip = new JSZip();
    const canvas: HTMLCanvasElement | any = this.$refs.canvas;
    canvas.toBlob((blob: any) => {
      zip.file(this.name + '.png', blob);
      zip.generateAsync({ type: 'blob' }).then((zipBlob: any) => {
        FileSaver.saveAs(zipBlob, 'cards.zip');
      });
    });
  }

  // savePicture method instantiates a new object of FormData to send the uid and the image
  // so that the new picture so that it later can be updated and watched by the earlier 
  // mentioned watch action 

  public savePicture() {
    const formData = new FormData();
    formData.append('uid', this.barcode);
    formData.append('image', this.image as Blob);
    UsersModule.update(formData).then((response: any) => {
      console.log('user updated profile!');
    }).catch((error: any) => {
      // TODO: show in notification to user
      console.error(error);
    });
  }

  // onNameInput is a getter to receive the information stored in the instance of checkUserData
  // and the generate Canvas 

  public onNameInput() {
    this.checkUserData();
    this.generateCanvas();
  }

  // This is a getter to receive information simply from the generate canvas instance

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

    @media only screen and (max-width: 808px)
        #canvasContainer
            width: 38vw
            height: 59.28vw

</style>
