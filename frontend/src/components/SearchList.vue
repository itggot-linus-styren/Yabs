<template>
  <v-card>
    <v-card-title>
      <v-text-field 
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table 
      :headers="headers"
      :items="items"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface IHeader {
  text: string,
  value: string
}

@Component({})
export default class SearchList extends Vue {
  search: string = "";
  @Prop() headers!: IHeader[];
  @Prop() items!: any[]; // Please fix generic types. 
  
}
</script>
