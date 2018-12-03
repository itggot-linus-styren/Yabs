<template lang="pug">
    #wrapper
        #left
        b-container
            b-row
                b-col
                    b-button(class="row-btn" :size="size" :variant="primary") Profil
            b-row
                b-col
                    b-button(class="row-btn" :size="size" :variant="primary") Hitta
            b-row
                b-col
                    b-button(class="row-btn" :size="size" :variant="primary") Lägg Till
                    
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
    primary = "primary"
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
    display: flex;
    flex-direction: column;
    margin: 100px;
}

#right{
    margin: 100px;
}

.container{
    margin-top: 100px;
}

.row-btn{
    width: inherit;
    margin-bottom: 10px;
}

</style>
