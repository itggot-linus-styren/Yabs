<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-chip-group mandatory>
            <v-chip
              v-model="users"
              class="ma-2"
              color="success"
              outlined
            >
              <v-icon left>
                mdi-account-outline
              </v-icon>
              Users
            </v-chip>

            <v-chip
              v-model="loans"
              class="ma-2"
              color="deep-purple"
              outlined
            >
              <v-icon left>
                mdi-handshake
              </v-icon>
              Loans
            </v-chip>
            <v-chip
              v-model="books"
              class="ma-2"
              color="light-blue"
              outlined
            >
              <v-icon left>
                mdi-library
              </v-icon>
              Books
            </v-chip>
          </v-chip-group>

          <SearchList 
            v-if="loans"
            :items="mockupLoans" 
            :headers="loanHeaders"
          />
          <SearchList 
            v-if="books"
            :items="mockupBooks" 
            :headers="bookHeaders"
          />
          <SearchList 
            v-if="users"
            :items="mockupUsers" 
            :headers="userHeaders"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import SearchList from '@/components/SearchList.vue';
import Find from '@/views/Find.vue';

@Component({
  components: {
    SearchList,
    Find
  },
})
export default class Test extends Vue {
  users:boolean = false;
  loans:boolean = false;
  books:boolean = false;

  // MOCKUP DATA
  loanHeaders: object[] = [
    { text: 'Utlånad till', value: 'elevnamn' },
    { text: 'Utlånad av', value: 'lärarnamn' },
    { text: 'Material', value: 'lån' },
    { text: 'Utgångsdatum', value: 'utgångsdatum' }
  ];
  bookHeaders: object[] = [
    { text: 'titel', value: 'elevnamn' },
    { text: 'desc', value: 'lärarnamn' },
    { text: 'Bla', value: 'lån' },
    { text: 'bla', value: 'utgångsdatum' }
  ];
  userHeaders: object[] = [
    { text: 'Namn', value: 'elevnamn' },
    { text: 'behörighet', value: 'lärarnamn' },
    { text: 'Stuffs', value: 'lån' },
    { text: 'moar stuffs', value: 'utgångsdatum' }
  ];
  mockupLoans: object[] = [
    {
      elevnamn: 'Simon Johannesson',
      lån: 'The Hobbit',
      lärarnamn: 'Daniel Berg',
      utgångsdatum: '01-01-2019'
    },
    {
      elevnamn: 'Eric Persson',
      lån: 'Lord of the flies',
      lärarnamn: 'David Lundholm',
      utgångsdatum: '01-01-2019'
    },
    {
      elevnamn: 'Filip Gustavsson',
      lån: 'The hitchhiker\'s guide to the galaxy',
      lärarnamn: 'Fredrik Kronhamn',
      utgångsdatum: '01-01-2019'
    },
    {
      elevnamn: 'Alex henryz',
      lån: 'Moby Dick',
      lärarnamn: 'Daniel Berg',
      utgångsdatum: '01-01-2019'
    },
    {
      elevnamn: 'Linus Styrén',
      lån: 'Harry Potter 3',
      lärarnamn: 'David Lundholm',
      utgångsdatum: '01-01-2019'
    },
    {
      elevnamn: '1 Johannesson',
      lån: 'The Hobbit',
      lärarnamn: 'Daniel Berg',
      utgångsdatum: '01-01-2019'
    },
    {
      elevnamn: '2 Persson',
      lån: 'Lord of the flies',
      lärarnamn: 'David Lundholm',
      utgångsdatum: '01-01-2019'
    },
    {
      elevnamn: '3 Gustavsson',
      lån: 'The hitchhiker\'s guide to the galaxy',
      lärarnamn: 'Fredrik Kronhamn',
      utgångsdatum: '01-01-2019'
    },
    {
      elevnamn: '4 henryz',
      lån: 'Moby Dick',
      lärarnamn: 'Daniel Berg',
      utgångsdatum: '01-01-2019'
    },
    {
      elevnamn: '5 Styrén',
      lån: 'Harry Potter 3',
      lärarnamn: 'David Lundholm',
      utgångsdatum: '01-01-2019'
    },
    {
      elevnamn: '6 Johannesson',
      lån: 'The Hobbit',
      lärarnamn: 'Daniel Berg',
      utgångsdatum: '01-01-2019'
    },
    {
      elevnamn: '7 Persson',
      lån: 'Lord of the flies',
      lärarnamn: 'David Lundholm',
      utgångsdatum: '01-01-2019'
    },
    {
      elevnamn: '8 Gustavsson',
      lån: 'The hitchhiker\'s guide to the galaxy',
      lärarnamn: 'Fredrik Kronhamn',
      utgångsdatum: '01-01-2019'
    },
    {
      elevnamn: '9 henryz',
      lån: 'Moby Dick',
      lärarnamn: 'Daniel Berg',
      utgångsdatum: '01-01-2019'
    },
    {
      elevnamn: '10 Styrén',
      lån: 'Harry Potter 3',
      lärarnamn: 'David Lundholm',
      utgångsdatum: '01-01-2019'
    }
  ];
}
</script>