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


// The TitleListComponent inherits the information about the titles from the titles module
// and the headers that are created in the headers object

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
    { text: 'Typ', value: 'title_type' },
    { text: 'ISBN', value: 'isbn' },
  ];
}
</script>

<style lang="sass" scoped>
    .card
        width: 100%
        height: 100%
        overflow-y: auto
</style>
