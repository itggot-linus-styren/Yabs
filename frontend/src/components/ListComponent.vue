<template>
  <v-card>
    <v-card-title>
      <v-text-field 
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      />
    </v-card-title>
    <v-data-table 
      :headers="headers"
      :items="items"
      :search="search"
      :items-per-page="itemsPerPage"
    >
      <template
        v-if="useActions"
        v-slot:item.action="{ item }"
      >
        <v-icon
          small
          class="mr-2"
          @click="route($event, item)"
        >
          edit
        </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface Header {
  text: string;
  value: string;
  sortable?: boolean;
}

@Component({})
export default class ListComponent extends Vue {
  @Prop() public headers!: Header[];
  @Prop() public items!: object[]; // Please fix generic types.
  @Prop({ default: false }) public useActions!: boolean;
  @Prop() public routePath!: string;
  @Prop() public routeSpecifier!: string;
  @Prop({ default: 5 }) public itemsPerPage!: number;

  public search: string = '';

  // Adds the header "Actions" if useActions is true.
  created(): void {
    if(this.useActions && !this.contains(this.headers, 'Actions') ) {
      this.headers.push({ text: 'Actions', value: 'action', sortable: false });
    }
  }

  // Returns true if the headers array contains an object with the given header text/title.
  // Use this instead of the includes function when checking if the list "headers" contain the defined headerText. 
  contains(headers: Header[], headerText: string): boolean {
    let i = 0;
    let result = false;
    while(i < headers.length) {
      if(headers[i].text == headerText) result = true;
      i += 1;
    }

    return result;
  }

  // Routes the user to host:port/${routePath}/${item[routeSpecifier]},
  // where "routePath" specifies the type of item and "routeSpecifier" is an identifier for the specific item.
  // Example: host:port/${"books"}/${item["id"]}
  route(event: Event, item: any): void {
    event.preventDefault();
    if(item[this.routeSpecifier]) {
      this.$router.push(`/${this.routePath}/${item[this.routeSpecifier]}`);
    }
  }
}
</script>
