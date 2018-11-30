<template lang="pug">
    .view
        .left
            h1 Simon
            h1 Joahnnesson
            h1 Elev - TE4
            CigCanvas
                // antingen bild eller kortet i canvas
        .right
            
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CigCanvas from '@/components/CigCanvas.vue';

@Component({
    components:{
        CigCanvas
    },
})
export default class App extends Vue {
    
}
</script>

<style lang="sass" scoped>

</style>
