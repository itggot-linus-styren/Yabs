<template>
    <div class="base">
        <b-navbar type="dark" variant="primary" toggleable>
            <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav_dropdown_collapse">
            <b-navbar-nav>
                <b-nav-item><router-link class="link" to="/">Start</router-link></b-nav-item>
                <b-nav-item><router-link class="link" to="/users">Profil</router-link></b-nav-item>
                <b-nav-item><router-link class="link" to="/add">Lägg till</router-link></b-nav-item>
                <b-nav-item><router-link class="link" to="/find">Hitta</router-link></b-nav-item>
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

<style lang="sass" scoped>
    .link
        color: white
        font-decoration: none

    .base
        position: absolute
        z-index: 1000
        left: 0px
        right: 0px

</style>

