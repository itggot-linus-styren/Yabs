<template lang="pug">
    #wrapper
        #left
            b-button(href="#" :size="size" id="left-button") Profil
            b-button(href="#" :size="size" id="left-button") Lägg Till
            b-button(href="#" :size="size" id="left-button") Hitta
        #right
            b-table(:sory-by.sync='sortBy', :sort-desc.sync='sortDesc', :items='items', :fields='fields')

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Start extends Vue {
    sortBy = 'utgångsdatum'
    sortDesc = false
    size = "lg"
    fields = [
        {key:'elevnamn', sortable:false},
        {key:'lärarnamn', sortable:false},
        {key:'utgångsdatum', sortable:false}
    ];

    items = [
        {elevnamn: "tjena", lärarnamn: "tjenixen", utgångsdatum: "01-01-2019"}
    ]
}
</script>


<style>
#wrapper{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    
}

#left{
    display: grid;
    margin: 80px;
    grid-template-columns: inherit inherit inherit;
    grid-template-rows: auto;
    grid-template-areas: 
     "header header header"
     "main main main"
     ". . .";
}

#left-button{
    margin: 20px;
}

#right{
    margin: 100px;
}

</style>
