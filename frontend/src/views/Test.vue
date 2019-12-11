<template>
    <v-app>
        <SearchList :items="mockupLoans" :headers="headers"/>
    </v-app>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import SearchList from '@/components/SearchList.vue';
@Component({
    components: {
        SearchList,
    },
})
export default class Test extends Vue {
    headers: object[] = [
    { text: "Utlånad till", align: "start", value: "elevnamn" },
    { text: "Utlånad av", value: "lärarnamn" },
    { text: "Material", value: "lån" },
    { text: "Utgångsdatum", value: "utgångsdatum" }
  ];
  mockupLoans: object[] = [
    // Consider changing object[] to an interface array of type Loan. (example: Loan[])
    // Mockup
    {
      elevnamn: "Simon Johannesson",
      lån: "The Hobbit",
      lärarnamn: "Daniel Berg",
      utgångsdatum: "01-01-2019"
    },
    {
      elevnamn: "Eric Persson",
      lån: "Lord of the flies",
      lärarnamn: "David Lundholm",
      utgångsdatum: "01-01-2019"
    },
    {
      elevnamn: "Filip Gustavsson",
      lån: "The hitchhiker's guide to the galaxy",
      lärarnamn: "Fredrik Kronhamn",
      utgångsdatum: "01-01-2019"
    },
    {
      elevnamn: "Alex henryz",
      lån: "Moby Dick",
      lärarnamn: "Daniel Berg",
      utgångsdatum: "01-01-2019"
    },
    {
      elevnamn: "Linus Styrén",
      lån: "Harry Potter 3",
      lärarnamn: "David Lundholm",
      utgångsdatum: "01-01-2019"
    },
    {
      elevnamn: "1 Johannesson",
      lån: "The Hobbit",
      lärarnamn: "Daniel Berg",
      utgångsdatum: "01-01-2019"
    },
    {
      elevnamn: "2 Persson",
      lån: "Lord of the flies",
      lärarnamn: "David Lundholm",
      utgångsdatum: "01-01-2019"
    },
    {
      elevnamn: "3 Gustavsson",
      lån: "The hitchhiker's guide to the galaxy",
      lärarnamn: "Fredrik Kronhamn",
      utgångsdatum: "01-01-2019"
    },
    {
      elevnamn: "4 henryz",
      lån: "Moby Dick",
      lärarnamn: "Daniel Berg",
      utgångsdatum: "01-01-2019"
    },
    {
      elevnamn: "5 Styrén",
      lån: "Harry Potter 3",
      lärarnamn: "David Lundholm",
      utgångsdatum: "01-01-2019"
    },
    {
      elevnamn: "6 Johannesson",
      lån: "The Hobbit",
      lärarnamn: "Daniel Berg",
      utgångsdatum: "01-01-2019"
    },
    {
      elevnamn: "7 Persson",
      lån: "Lord of the flies",
      lärarnamn: "David Lundholm",
      utgångsdatum: "01-01-2019"
    },
    {
      elevnamn: "8 Gustavsson",
      lån: "The hitchhiker's guide to the galaxy",
      lärarnamn: "Fredrik Kronhamn",
      utgångsdatum: "01-01-2019"
    },
    {
      elevnamn: "9 henryz",
      lån: "Moby Dick",
      lärarnamn: "Daniel Berg",
      utgångsdatum: "01-01-2019"
    },
    {
      elevnamn: "10 Styrén",
      lån: "Harry Potter 3",
      lärarnamn: "David Lundholm",
      utgångsdatum: "01-01-2019"
    }
  ];
}
</script>

<style scoped>
#root {
    padding-top: 100px;
}
</style>