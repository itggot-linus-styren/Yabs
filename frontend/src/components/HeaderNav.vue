<template>
    <div>
        <b-navbar type="dark" variant="primary" toggleable>
            <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav_dropdown_collapse">
            <b-navbar-nav>
                <b-nav-item href="#">Start</b-nav-item>
                <b-nav-item href="#">Profil</b-nav-item>
                <b-nav-item href="#">Lägg till</b-nav-item>
                <b-nav-item href="#">Hitta</b-nav-item>
            </b-navbar-nav>
            </b-collapse>
            <b-navbar-brand>Yabs</b-navbar-brand>
            <b-navbar-brand class="material-icons">account_circle</b-navbar-brand>
        </b-navbar>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HeaderNav extends Vue {}
</script>
