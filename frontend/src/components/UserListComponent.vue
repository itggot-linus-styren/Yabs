<template>
  <ListComponent
    :headers="headers"
    :items="usersModule.allAsArray"
    :items-per-page="5"
    class="elevation-1"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import UsersModule from '../store/modules/UsersModule';
import { VuexModule } from 'vuex-module-decorators';
import ListComponent from '@/components/ListComponent.vue';

@Component({
  components: {
    ListComponent
  }
})
export default class LoanListComponent extends Vue {
  private usersModule: VuexModule = UsersModule;
  private headers: object[] = [
    { text: 'Namn', value: 'name' },
    { text: 'Email', value: 'email' },
    { text: 'Klass', value: 'klass' },
  ];
}
</script>

<style lang="sass" scoped>
    .card
        width: 100%
        height: 100%
        overflow-y: auto
</style>