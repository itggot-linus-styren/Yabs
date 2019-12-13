<template>
  <div>
    <h1 class="display-2">
      Cards
    </h1>
    <CigForm @sendImages="onSendImages($event)" />  
    <CanvasContainer :images="images" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import CigForm from '@/components/CigForm.vue';
import CanvasContainer from '@/components/CanvasContainer.vue';

@Component({
  components: {
    CigForm,
    CanvasContainer
  }
})
export default class AdminCardsViews extends Vue {

  public images: File[] = [];

  public onSendImages(images: any[]) {
    this.images = images;
  }
  
}
</script>


<style scoped>
</style>
