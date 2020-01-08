<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-chip-group mandatory>
            <v-chip
              v-if="!RoleChecker.isStudent()"
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

          <LoanListComponent
            v-if="loans"
            :items-per-page="15"
          />
          <BookListComponent
            v-if="books"
            :use-actions="true"
            :items-per-page="15"
          />
          <UserListComponent
            v-if="users"
            :items-per-page="15"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

import BookListComponent from '@/components/BookListComponent.vue';
import UserListComponent from '@/components/UserListComponent.vue';
import LoanListComponent from '@/components/LoanListComponent.vue';
import BooksModule from '@/store/modules/BooksModule';
import UsersModule from '@/store/modules/UsersModule';
import LoansModule from '@/store/modules/LoansModule';
import RoleChecker from '../helpers/RoleChecker';

@Component({
  components: {
    BookListComponent,
    UserListComponent,
    LoanListComponent
  },
})
export default class FindView extends Vue {
  private RoleChecker: RoleChecker = RoleChecker;
  users:boolean = false;
  loans:boolean = false;
  books:boolean = false;

  private created(): void {
    BooksModule.fetchAll();
    UsersModule.fetchAll();
    LoansModule.fetchAll();
  }

}
</script>
