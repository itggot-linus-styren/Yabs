<template>
    <b-navbar type="dark" variant="primary" toggleable>
        <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_dropdown_collapse">
        <b-navbar-nav>
            <b-nav-item><router-link class="test" to="/">Start</router-link></b-nav-item>
            <b-nav-item><router-link class="test" to="/profile">Profil</router-link></b-nav-item>
            <b-nav-item><router-link class="test" to="/add">Lägg till</router-link></b-nav-item>
            <b-nav-item><router-link class="test" to="/find">Hitta</router-link></b-nav-item>
        </b-navbar-nav>
        <router-view/>
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

<style lang="sass">
    .test
        color: white
        font-decoration: none
</style>

