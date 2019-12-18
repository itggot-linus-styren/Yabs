<template>
  <v-card
    id="canvas-container"
    justify="center"
    align="center"
  >
    <div
      id="canvasContainer"
      ref="canvasContainer"
    >
      <canvas
        id="canvas"
        ref="canvas"
        height="500"
      />
    </div>
    <v-form>
      <v-item-group>
        <v-autocomplete
          v-model="name"
          :items="userNames"
        />
        <v-btn
          class="btn"
          @click="savePicture"
        >
          Spara Bild
        </v-btn>
        <v-btn
          class="btn"
          @click="downloadCanvas"
        >
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
  </v-card>
</template>

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
  public role: number = 0;
  public email: string = '';
  public width: number = 0;
  public height: number = 0;
  public size: number = 1;
  public context: CanvasRenderingContext2D | null = null;

  private get userNames(): string[] {
    return Object.entries(UsersModule.all)
      .filter(([key, user]) => !user.name.includes('Deleted User'))
      .map(([key, user]) => user.name);
  }

  public checkUserData(): void { // TODO: don't compare name to find the user. Instead compare the uid.
    for (const user in UsersModule.all) {
      if (this.name === UsersModule.all[user].name) {
        this.barcode = user;
        this.email = UsersModule.all[user].email;
        this.role = UsersModule.all[user].role;
      }
    }
  }

  public generateCanvas(): void {
    this.getCanvasContainerSize();
    this.setCanvasSize();
    if (this.context !== null) {
      this.context.clearRect(0, 0, this.width, this.height);

      setTimeout(() => {
        const bg = this.$refs.bg as HTMLImageElement;
        if (bg && this.context) {
          this.context.drawImage(bg, 0, 0, this.width, this.height);

        const logo = this.$refs.logo as HTMLImageElement;
        this.context.drawImage(logo, this.width / 2 - 75, 25);
        this.drawText();
        this.drawImages();
        }
      }, 200);
    }
  }

  public getCanvasContainerSize(): void {
    const canvasContainer = this.$refs.canvasContainer as HTMLDivElement;
    this.width = canvasContainer.clientWidth;
    this.height = canvasContainer.clientHeight;
  }

  public setCanvasSize(): void {
    const htmlCanvasElement = this.$refs.canvas as HTMLCanvasElement;
    this.context = htmlCanvasElement.getContext('2d');

    htmlCanvasElement.width = this.width;
    htmlCanvasElement.height = this.height;
  }

  public drawImages(): void {
    const barcode = new Image();
    const profileImage = new Image();

    if (this.image != null) {
      profileImage.src = URL.createObjectURL(this.image);
    }

    if (this.barcode !== '') {
      JsBarcode(barcode, this.barcode);
    }

    setTimeout(() => {
      if (this.context){
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
      }
    }, 200);
  }

  public drawText(): void {
    if (this.context){
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
  }

  @Watch('sendCanvas')
  public sendThisCanvas(): void {
    const zip = new JSZip();
    const canvas = this.$refs.canvas as HTMLCanvasElement;
    canvas.toBlob((blob) => {
      this.$emit('imageSent', blob);
    });
  }

  public downloadCanvas(): void {
    const zip = new JSZip();
    const canvas = this.$refs.canvas as HTMLCanvasElement;
    canvas.toBlob((blob) => {
      if (blob){
        zip.file(this.name + '.png', blob);
        zip.generateAsync({ type: 'blob' }).then((zipBlob) => {
          FileSaver.saveAs(zipBlob, 'cards.zip');
        });
      }
    });
  }

  public savePicture(): void {
    const formData = new FormData();
    formData.append('uid', this.barcode);
    formData.append('image', this.image as Blob);
    UsersModule.update(formData).then((response) => {
      console.log('user updated profile!');
    }).catch((error) => {
      // TODO: show in notification to user
      console.error(error);
    });
  }

  public onNameInput(): void {
    this.checkUserData();
    this.generateCanvas();
  }

  public mounted(): void {
    this.generateCanvas();
  }
}
</script>

<style lang="css" scoped>
  #canvas-container{
    padding: 10px;
    margin: 5px;
  }
  .btn{
    margin: 5px;
  }
</style>
