<template>
    <b-navbar type="dark" variant="primary" toggleable>
        <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_dropdown_collapse">
        <b-navbar-nav>
            <b-nav-item><router-link to="/">Start</router-link></b-nav-item>
            <b-nav-item><router-link to="/user/:id">Profil</router-link></b-nav-item>
            <b-nav-item><router-link to="/loan/add">Lägg till</router-link></b-nav-item>
            <b-nav-item><router-link to="/loan/find">Hitta</router-link></b-nav-item>
        </b-navbar-nav>

        </b-collapse>
        <b-navbar-brand>Yabs</b-navbar-brand>
        <b-navbar-brand class="material-icons">account_circle</b-navbar-brand>

        <b-btn @click="onClickMe">lol</b-btn>
    </b-navbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter } from '../decorators';

@Component
export default class HeaderNav extends Vue {

  @Getter('titles/all') titles : any;
  @Getter('books/all') books : any;
  @Getter('loans/all') loans : any;
  @Getter('users/all') users : any;

  created() {
    this.$store.dispatch('titles/all');
    this.$store.dispatch('books/all');
    this.$store.dispatch('loans/all');
    this.$store.dispatch('users/all');
  }

  onClickMe() {
    this.$store.dispatch('titles/create', {name: "A book about books"});
    console.log(JSON.parse(JSON.stringify(this.titles)));
    this.$store.dispatch('books/create', {barcode: "123123"});
    console.log(JSON.parse(JSON.stringify(this.books)));
    this.$store.dispatch('loans/create', {return_at: Date.now()});
    console.log(JSON.parse(JSON.stringify(this.loans)));
  }

}
</script>
