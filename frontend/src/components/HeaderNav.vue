<template>
  <div class="pb-10">
    <v-app-bar fixed class="nav">
      <v-toolbar-items>
        <v-btn to="/" text>
          <v-icon class="px-3">mdi-home</v-icon>Yabs
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>

        <v-btn v-if="usersModule.currentUser" :to="'/users/'+ usersModule.currentUser.uid" text>
          <v-icon class="px-3">mdi-settings</v-icon>Profil
        </v-btn>
        <v-btn class="ml-2 mr-5" v-if="usersModule.currentUser" text color="grey" @click="signOut">
          <v-icon>mdi-logout-variant</v-icon>
        </v-btn>
        <GoogleLogin></GoogleLogin>
      </v-toolbar-items>
    </v-app-bar>
  </div>
  <!-- //- .base
    //-     b-navbar(type='dark', variant='primary', toggleable='')
    //-         b-navbar-toggle(target='nav_dropdown_collapse')
    //-         b-collapse#nav_dropdown_collapse(is-nav='')
    //-             b-navbar-nav
    //-                 b-nav-item
    //-                     router-link.link(to='/') Start
    //-                 b-nav-item(v-if="usersModule.currentUser")
    //-                     router-link.link(:to="`/users/${usersModule.currentUser.uid}`") Profil
    //-                 b-nav-item
    //-                     router-link.link(to='/add') Lägg till
    //-                 b-nav-item
    //-                     router-link.link(to='/find') Hitta
    //-         b-navbar-brand Yabs
    //-         GoogleLogin
  //- b-navbar-brand.material-icons account_circle-->
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import GoogleLogin from '@/components/GoogleLogin.vue';
import UsersModule from '../store/modules/UsersModule';

@Component({
  components: {
    GoogleLogin,
  },
})
export default class HeaderNav extends Vue {
  public usersModule = UsersModule;
  // private links = [
  //   {
  //     title: 'Hem',
  //     link: '/home',
  //   },
  //   {
  //     title: 'Profil',
  //     link: `/users/${UsersModule.currentUser.uid}`,
  //   },
  //   {
  //     title: 'Lägg till',
  //     link: `/add`,
  //   },
  //   {
  //     title: 'Hitta',
  //     link: `/find`,
  //   },
  // ];
   public signOut() {
       try {
        // @ts-ignore: gapi
        const auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(() => {
          UsersModule.signOut();
        });
    } catch (e) {
        UsersModule.signOut();
    }
  }
}
</script>

<style>
a:hover {
  text-decoration: none !important;
}
a:active,
a:focus {
  outline: 0;
  border: none;
  -moz-outline-style: none;
}
button:active,
button:focus {
  outline: 0 !important;
  border: none !important;
  -moz-outline-style: none;
}

input:-webkit-autofill {
  background-color: transparent !important;
  background-image: none !important;
  color: #000000 !important;
}

input:-webkit-autofill {
  -webkit-box-shadow: 200px 200px 100px white inset;
  box-shadow: 200px 200px 100px white inset;
}
</style>

