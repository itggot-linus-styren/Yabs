<template>
  <v-form @submit="onSubmit" v-if="show">
    <v-card>
      <v-text-field
        v-model="form.barcode"
        label="Barcode"
        autocomplete="off"
        required
      ></v-text-field>
      <v-autocomplete    
        v-model="form.title_id"
        :items="titleNames"
        item-text="name"
        item-value="id"
        label="Select a favorite activity or create a new one"
        autocomplete="off"
      ></v-autocomplete>
      <v-text-field
        v-model="form.status"
        label="Status: tex 'ok', 'framsida saknas'"
        autocomplete="off"
        required
      ></v-text-field>
      <v-btn class="mr-4" type="submit" color="primary">Lägg till</v-btn>
      <v-btn @click="onReset" color="error">Rensa fält</v-btn>
    </v-card>
  </v-form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TitlesModule from '../store/modules/TitlesModule';
import BooksModule from '../store/modules/BooksModule';

@Component
export default class CreateBookFormComponent extends Vue {
  public form = {
    barcode: '',
    title_id: 0,
    status: '',
  };
  public show = true;

  get titleNames() {
    return Object.entries(TitlesModule.all).map(([key, title]) => ({name: title.name, id: title.id}));
  }

  public onSubmit(evt: Event) {
    evt.preventDefault();
    console.log(this.form.title_id);
    BooksModule.create(this.form);
  }

  public onReset(evt: Event) {
    evt.preventDefault();
    this.form = {
      barcode: '',
      title_id: 0,
      status: '',
    };
    this.show = false;
    this.$nextTick(() => {
      this.show = true;
    });
  }
}
</script>
