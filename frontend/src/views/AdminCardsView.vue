<!--
  This template has some events and eventlisteners that are created and listed below such
  as the sendimages and is the parent component to the cardformcomponent and the canvas
  container component
 -->

<template>
  <div>
    <h1 class="display-2">
      Cards
    </h1>
    <div class="flex">
      <div style="margin-right: 50px">
        <CardFormComponent @sendImages="onSendImages($event)" />  
      </div>
      <div v-if="images.length > 0">
        <CanvasContainer :images="images" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import CardFormComponent from '@/components/CardFormComponent.vue';
import CanvasContainer from '@/components/CanvasContainer.vue';
import UsersModule from '../store/modules/UsersModule';

@Component({
  components: {
    CardFormComponent,
    CanvasContainer
  }
})
export default class AdminCardsViews extends Vue {
  public images: File[] = [];

  // The on send images getter takes the image from the event target and sets it to the instance
  // of the image

  private onSendImages(images: File[]): void {
    this.images = images;
  }

  private created(): void {
    UsersModule.fetchAll();
  }
  
}
</script>


<style scoped>
.flex {
  display: flex;
}

.flex > div {
  flex: 1;
}
</style>
