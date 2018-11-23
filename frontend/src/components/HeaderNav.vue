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
    </b-navbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HeaderNav extends Vue {}
</script>
