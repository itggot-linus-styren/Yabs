<template lang="pug">
<div>
  <b-navbar type="dark" variant="primary" toggleable>
    <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_dropdown_collapse">
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>


</template>

<style lang="sass">
  

</style>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data: function () {
    return {
    }
  },
  methods: {
  }
});
</script>
