<template>
  <v-container>
    <h1>{{ usersModule.currentUser.name }} - {{ usersModule.currentUser.klass }}</h1>
    <img
      v-if="usersModule.currentUser.photo_path" 
      :src="'http://localhost:3000/'+usersModule.currentUser.photo_path" 
      alt="Profile Picture"
      class="mt-5"
      @click="uploadButton"
    >
    <div v-else> 
      <p>Du har ingen profilbild, det var tråkigt.</p>
      <v-btn
        color="primary"
        @click="uploadButton"
      >
        Ladda upp en bild
      </v-btn>
    </div>
    <input
      id="upload-button"
      type="file"
      name="myfile"
      hidden
      @change="onFileChanged"
    >
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import CigCanvas from '@/components/CigCanvas.vue';
import AddLoan from '@/components/AddLoan.vue';
import RecentLoan from '@/components/RecentLoan.vue';
import UsersModule, { User } from '../store/modules/UsersModule';
import { VuexModule } from 'vuex-module-decorators';

@Component({
  components: {
    CigCanvas,
    AddLoan,
    RecentLoan,
  },
})
export default class Profile extends Vue {
  private usersModule = UsersModule;
  private image!: Blob;
  public created() {


  }

  public newPicture() {
    const formData = new FormData();
    formData.append('uid', UsersModule.currentUser!.uid);
    formData.append('image', this.image as Blob);
    UsersModule.update(formData).then((response: any) => {
      console.log(UsersModule.all['1935798971']);
    }).catch((error: any) => {
      // TODO: show in notification to user
      console.error(error);
    });
  }

  public uploadButton() {
    const input: any = document.querySelector('#upload-button');
    input.click();
  }
  public onFileChanged(event: any) {
    this.image = event.target.files[0];
    this.newPicture();
  }
}
</script>

<style scoped>
   .btn {
  border: 2px solid gray;
  color: gray;
  background-color: white;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
}

.upload-btn-wrapper input[type=file] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
</style>
