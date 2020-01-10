<template>
  <div>
    <v-text-field 
      v-model="search"
      append-icon="search"
      label="Search"
      single-line
      hide-details
    />
    <v-data-table
      :headers="headers"
      :items="convertListToA(staffUsers)"
      :items-per-page="5"
      :search="search"
    >
      <template v-slot:item.role="{ item }">
        <v-select
          v-model="staffUsers[item.uid].assignedRoles"
          :items="selectRoles"
          multiple
        />
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn 
          color="primary"
          @click="updateRoles(staffUsers[item.uid])"
        >
          Save
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import UsersModule from '@/store/modules/UsersModule';
import { VuexModule } from 'vuex-module-decorators';
import RoleChecker from '@/helpers/RoleChecker';
import { User, UserCollection } from '@/types';
import convertListToA from '@/helpers/convertNestedToArray';
import convertListToN from '@/helpers/convertArrayToNested';

@Component({
  components: {
  },
})
export default class AdminUsersVIew extends Vue {
  private UsersModule: VuexModule = UsersModule;
  private RoleChecker: RoleChecker = RoleChecker;
  private convertListToA: Function = convertListToA;

  private search: string = '';
  private headers: object[] = [
    { text: 'Namn', value: 'name' },
    { text: 'Email', value: 'email' },
    { text: 'Roller', value: 'role' },
    { text: '', value: 'actions' },
  ];
  get staffUsers(): UserCollection {
    return convertListToN(UsersModule.allAsArray
      .filter(user => RoleChecker.isStudentHealth(user))
      .map((user) => {
        user.assignedRoles = RoleChecker.assignedRoles(user).map((number) => { return number.toString(); });
        return user;
      }), 'uid');
  }

  private selectRoles: object[] = Object.keys(RoleChecker.roles()).map((key) => {
    return { 
      value: key, 
      text: RoleChecker.roles()[Number(key)] 
    }; 
  }).filter(selectRole => Number(selectRole.value) != 1);
  
  private created(): void {
    UsersModule.fetchAll();
  }

  private updateRoles(user: User): void {
    if (user.assignedRoles!.length >= 1) {
      user.role = user.assignedRoles!.reduce((acc, num) => acc += Number(num), 0);
      UsersModule.update(user);
    }
  }
}
</script>

<style scoped>
</style>
