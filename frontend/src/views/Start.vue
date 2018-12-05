<template lang="pug">
<<<<<<< HEAD
    #wrapper
        #left
        b-container
            b-row
                b-col(class="d-flex justify-content-center" cols="4")
                    b-button 1 of 2
                b-col(class="d-flex justify-content-center" cols="4")
                b-col(class="d-flex justify-content-center" cols="4")
                    b-button 2 of 2
                
            b-row
                b-col
                b-col(class="d-flex justify-content-center" cols="6")
                    b-button.w-100 2 of 3
                b-col

        #right
            b-table(:sory-by.sync='sortBy', :sort-desc.sync='sortDesc', :items='items', :fields='fields')
=======
    .view
        #left
        b-container
            h1 Välkommen till YABS! 
            br
            p.info Denna applikation kommer att användas för att underlätta hantering/utlåningen av olika sorters litteratur och utskrivning av passerkort.
            br
            b-row
                b-col
                    router-link.link.row-btn(to='/users')
                        b-button.row-btn(:size="size" :variant="primary") Profil
            p.info På profil sidan så ser du all relevant information angående din profil tex antal aktiva lån från dig.
            br
            b-row
                b-col
                    router-link.link.row-btn(to='/add')
                        b-button.row-btn(:size="size" :variant="primary") Lägg till
            p.info Lägg till delen används för att skapa nya passerkort, registera nya lån och lägga till nya böcker.
            br
            b-row
                b-col
                    router-link.link.row-btn(to='/find')
                        b-button.row-btn(:size="size" :variant="primary") Hitta
            p.info På hitta delen så kan du söka på allting som denna sida hanterar, Tex Elever, specifika lån eller böcker.
                    
        #right
            h5 Böcker som ska inlämnas snart:
            br
            .myCard
                RecentLoan
>>>>>>> 397171602c00d38c04f2dc31dbee188a194dd55c

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
<<<<<<< HEAD

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
=======
import RecentLoan from '@/components/RecentLoan.vue';

@Component({
    components: {
        RecentLoan,
    },
})
export default class Start extends Vue {
    public size = 'lg';
    public primary = 'primary';
>>>>>>> 397171602c00d38c04f2dc31dbee188a194dd55c
}
</script>


<<<<<<< HEAD
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
=======
<style lang="sass">

.info
    font-size: 1.2em


.myCard
    width: 100%
    height: 90%
    overflow-y: auto
    position: relative
    min-width: 0
    background-color: #fff
    background-clip: border-box
    border: 1px solid rgba(0, 0, 0, 0.125)
    border-radius: 0.25rem
    display: flex
    flex-direction: row
    justify-content: center



#wrapper
    display: flex
    flex-direction: row
    justify-content: space-between


#left
    display: flex
    flex-direction: column
    margin: 100px


#right
    margin: 100px


.container
    margin-top: 100px


.row-btn
    width: inherit
    margin-bottom: 10px

>>>>>>> 397171602c00d38c04f2dc31dbee188a194dd55c

</style>
