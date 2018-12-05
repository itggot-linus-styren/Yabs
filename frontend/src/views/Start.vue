<template lang="pug">
    #wrapper
        #left
        b-container
            h1 Välkommen till YABS! 
            br
            p(class="info") Denna applikation kommer att användas för att underlätta hantering/utlåningen av olika sorters litteratur och utskrivning av Passerkort.
            br
            b-row
                b-col
                    router-link.link.row-btn(to='/users')
                        b-button.row-btn(:size="size" :variant="primary") Profil
            p(class="info") På profil sidan så ser du all relevant information agngående din profil tex antal aktiva lån från dig.
            br
            b-row
                b-col
                    router-link.link.row-btn(to='/add')
                        b-button.row-btn(:size="size" :variant="primary") Lägg till
            p(class="info") Lägg till delen används för att skapa nya Passerkort, registera nya lån och lägga till nya böcker.
            br
            b-row
                b-col
                    router-link.link.row-btn(to='/find')
                        b-button.row-btn(:size="size" :variant="primary") Hitta
            p(class="info") På hitta delen så kan du söka på allting som denna sida hanterar, Tex Elever, specifika lån eller böcker.
                    
        #right
            h5 Böcker som ska inlämnas snart:
            br
            RecentLoan

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RecentLoan from '@/components/RecentLoan.vue';

@Component({
    components: {
        RecentLoan,
    },
})
export default class Start extends Vue {
    public sortBy = 'utgångsdatum';
    public sortDesc = false;
    public size = 'lg';
    public primary = 'primary';
    public fields = [
        {key: 'elevnamn', sortable: false},
        {key: 'lärarnamn', sortable: false},
        {key: 'utgångsdatum', sortable: false},
    ];

    public items = [
        {elevnamn: 'tjena', lärarnamn: 'tjenixen', utgångsdatum: '01-01-2019'},
        {elevnamn: 'tjena', lärarnamn: 'tjenixen', utgångsdatum: '01-01-2019'},
        {elevnamn: 'tjena', lärarnamn: 'tjenixen', utgångsdatum: '01-01-2019'},
        {elevnamn: 'tjena', lärarnamn: 'tjenixen', utgångsdatum: '01-01-2019'},
        {elevnamn: 'tjena', lärarnamn: 'tjenixen', utgångsdatum: '01-01-2019'},
    ];
}
</script>


<style>

.info{
    font-size: 1.2em;
}

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
