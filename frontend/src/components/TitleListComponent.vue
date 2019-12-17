<template>
  <ListComponent
    :headers="headers"
    :items="titlesModule.allAsArray"
    class="elevation-1"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TitlesModule from '../store/modules/TitlesModule';
import { VuexModule } from 'vuex-module-decorators';
import ListComponent from '@/components/ListComponent.vue';

@Component({
  components: {
    ListComponent
  }
})
export default class TitleListComponent extends Vue {
  private titlesModule: VuexModule = TitlesModule;
  private headers: object[] = [
    { text: 'Titel', value: 'name' },
    { text: 'Kostnad', value: 'cost' },
    { text: 'Typ', values: 'title_type' },
    { text: 'ISBN', values: 'isbn' },
  ];
}
</script>

<style lang="sass" scoped>
    .card
        width: 100%
        height: 100%
        overflow-y: auto
</style>
