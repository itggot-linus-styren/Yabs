<template lang="pug">
   div
    v-form(@submit='onSubmit', @reset='onReset', v-if='show')
        v-card(color='light')
            v-item-group(vertical='' label-class='text-sm-right' label-for='nestedBid')
                v-text-field#nestedBid(placeholder='Bokens Streckkod' v-model="form.barcode")
            v-item-group(vertical='' label-class='text-sm-right' label-for='nestedBid')
                v-autocomplete(v-model="name" :items="titleNames" placeholder='Titel namn')
            v-item-group(vertical='' label-class='text-sm-right' label-for='nestedBid')
                v-text-field#nestedBid(placeholder='Status: tex "ok", "framsida saknas"' v-model="form.status")
            v-btn(type='submit', color='primary') Lägg till
            v-btn(type='reset', color='error') Rensa Fältet

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TitlesModule from '../store/modules/TitlesModule';
import BooksModule from '../store/modules/BooksModule';

@Component
export default class AddingForm extends Vue {
  public form = {
    barcode: '',
    title_id: 0,
    status: '',
  };

  public name: string = '';
  public show = true;

  get titleNames() {
    return Object.entries(TitlesModule.all).map(([key, title]) => title.name);
  }

  public toId() {
    for (const title in TitlesModule.all) {
      if (this.name === TitlesModule.all[title].name) {
        this.form.title_id = TitlesModule.all[title].id;
      }
    }
  }

  public onSubmit(evt: Event) {
    evt.preventDefault();
    BooksModule.create(this.form);
  }

  public onReset(evt: Event) {
    evt.preventDefault();
    this.form.barcode = '';
    this.form.title_id = 0;
    this.form.status = '';
    this.show = false;
    this.$nextTick(() => {
      this.show = true;
    });
  }
}
</script>
